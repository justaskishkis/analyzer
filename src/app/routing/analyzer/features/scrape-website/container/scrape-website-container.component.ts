import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
	scrapeWebsiteDataSelector,
	scrapeWebsiteLoadingSelector,
	scrapeWebsiteServerResponseSelector
} from '../state/scrape-website.selectors';
import {
	ILongestPathList, ILongestPathPopularList,
	IMostUsedTagList, IScrapeWebsiteFormFields, IScrapeWebsiteRequest,
	IScrapeWebsiteResponse, IScrapingHistoryItem, IUniqueTagList, scrapingHistoryBrowserStorageName,
} from '../state/scrape-website.models';
import { IAnalyzerState } from '../../../state/analyzer.models';
import { ScrapeWebsiteService } from '../services/scrape-website.service';
import { scrapeWebsite, scrapeWebsiteClear } from '../state/scrape-website.actions';
// tslint:disable-next-line:no-implicit-dependencies
import { BrowserStorageService } from '@companyName-lib/browser-storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { _t } from '../../../../../utils/translate.utils';
import { TranslateService } from '@ngx-translate/core';
import { patternValidator } from '../../../../../../companyName-ui-components/form/validators';
import { httpUrlValidatorPattern } from '../../../../../../companyName-ui-components/form/form.models';

@Component({
	selector: 'apppre-scrape-website-container',
	templateUrl: './scrape-website-container.component.html',
	styleUrls: ['./scrape-website-container.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrapeWebsiteContainerComponent implements OnDestroy {
	scrapeWebsiteLoading$ = this.store.select(scrapeWebsiteLoadingSelector);

	scrapeWebsiteFailed$ = this.store.select(scrapeWebsiteServerResponseSelector);

	// scrapeWebsiteFailed$ = this.store.select(scrape);

	uniqueTagList: IUniqueTagList;

	mostUsedTagList: IMostUsedTagList;

	longestPath: ILongestPathList;

	longestPathWithMostPopularTag: ILongestPathPopularList;

	scrapingHistory: string[] = [];

	noScrapingHistoryMessage = _t('scrape-website.message.no-websites-scraped-yet');

	scrapingHistoryHeading = _t('scrape-website.heading.history');

	formLabelWebsiteUrl = _t('scrape-website.label.website-url');

	formButtonScrape = _t('scrape-website.button.scrape');

	uniqueTagListHeading = _t('scrape-website.heading.unique-tag-list');

	mostUsedTagHeading = _t('scrape-website.heading.most-used-tag');

	longestPathOrPathsFromRootHeading = _t('scrape-website.heading.longest-path-or-paths-from-root');

	longestPathOrPathsFromRootHeadingWithMostPopular = _t('scrape-website.heading.longest-path-or-paths-from-root-with-most-popular');

	noDataText = _t('message.no-data');

	form: FormGroup;

	private scrapeWebsiteData$ = this.store.pipe(select(scrapeWebsiteDataSelector));

	private subscription = new Subscription;

	constructor(
		private formBuilder: FormBuilder,
		private store: Store<IAnalyzerState>,
		private browserStorageService: BrowserStorageService,
		private changeDetectorRef: ChangeDetectorRef,
		private translateService: TranslateService,
		public scrapeWebsiteService: ScrapeWebsiteService,
	) {
		this.clearContainer();
		this.handleScrapingData();
		this.handleHistory();
		this.buildForm();
	}

	ngOnDestroy(): void {
		this.subscription.unsubscribe();
	}

	submit() {
		if (this.form.valid) {
			const {websiteUrl} = this.form.getRawValue() as IScrapeWebsiteFormFields;
			const scrapeWebsiteRequest: IScrapeWebsiteRequest = {
				request: {websiteUrl},
				isLoadingGlobal: true,
			};
			this.store.dispatch(scrapeWebsite({scrapeWebsiteRequest}));
		}
	}

	total(total: number): string {
		return this.translateService.instant('title.total') + ' ' + String(total);
	}

	timesUsed(times: number): string {
		return this.translateService.instant('title.times-used') + ' ' + String(times);
	}

	longestPathStats(count: number, length: number): string {
		return this.translateService.instant('title.count') + ' ' + String(count) + ', ' +
			this.translateService.instant('title.length') + ' ' + String(length);
	}

	longestPathPopularStats(count: number, length: number, timesUsed: number): string {
		return this.translateService.instant('title.count') + ' ' + String(count) + ', ' +
			this.translateService.instant('title.length') + ' ' + String(length) + ', ' +
			this.translateService.instant('title.times-used') + ' ' + String(timesUsed);
	}

	handleHistoryItemClicked(item: IScrapingHistoryItem): void {
		this.form.patchValue({ websiteUrl: item.name });
		this.store.dispatch(scrapeWebsiteClear());
		this.analyzeWebsiteData(item.data);
	}

	private handleScrapingData(): void {
		const subscription = this.scrapeWebsiteData$.subscribe(
			(data: IScrapeWebsiteResponse) => {
				if (data && data.contents) {
					const {websiteUrl} = this.form.getRawValue() as IScrapeWebsiteFormFields;
					this.storeInHistory(websiteUrl, data.contents);
					this.analyzeWebsiteData(data.contents);
				}
			}
		);
		this.subscription.add(subscription);
	}

	private analyzeWebsiteData(data: string): void {
		// The order of methods cannot be changed
		this.uniqueTagList = this.scrapeWebsiteService.getUniqueTagList(data);
		this.mostUsedTagList = this.scrapeWebsiteService.getMostUsedTagList(data);
		this.scrapeWebsiteService.getAllRoutesFromDomToString(data);
		this.longestPath = this.scrapeWebsiteService.getLongestPathList();
		this.longestPathWithMostPopularTag = this.scrapeWebsiteService.getLongestPathWithMostPopularTag();
		this.changeDetectorRef.detectChanges();
	}

	private clearContainer(): void {
		this.store.dispatch(scrapeWebsiteClear());
	}

	private storeInHistory(name: string, data: string): void {
		const historyItem: IScrapingHistoryItem = { name, data };
		const history = this.browserStorageService.getItem<IScrapingHistoryItem[]>(scrapingHistoryBrowserStorageName);
		const newArray = JSON.parse(JSON.stringify(history));
		newArray.push(historyItem);
		this.scrapeWebsiteService.saveItem(scrapingHistoryBrowserStorageName, newArray);
		this.handleHistory();
	}

	private handleHistory(): void {
		const history: string[] | null = this.browserStorageService.getItem<string[]>(scrapingHistoryBrowserStorageName);
		if (history && history.length > 0) {
			this.scrapingHistory = history;
		} else {
			this.browserStorageService.setItem(scrapingHistoryBrowserStorageName, []);
		}
	}

	private buildForm(): void {
		this.form = this.formBuilder.group({
			websiteUrl: ['http://www.', [Validators.required, patternValidator(httpUrlValidatorPattern, _t('message.error.only-http-scraping-is-supported-in-this-version'))]],
		});
	}
}
