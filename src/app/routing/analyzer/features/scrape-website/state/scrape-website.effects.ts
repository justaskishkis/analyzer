import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {ScrapeWebsiteApiService} from '../services/scrape-website-api.service';
import {scrapeWebsite, scrapeWebsiteFailed, scrapeWebsiteSuccess} from './scrape-website.actions';

@Injectable()
export class ScrapeWebsiteEffects {
	onScrapeWebsiteCallApiAndHandleStatus$ = createEffect(() =>
		this.actions$.pipe(
			ofType(scrapeWebsite),
			switchMap(({scrapeWebsiteRequest}) => {
				return this.scrapeWebsiteApiService.scrapeWebsite(scrapeWebsiteRequest).pipe(
					map((scrapeWebsiteResponse) => scrapeWebsiteSuccess({scrapeWebsiteResponse})),
					catchError(serverResponse => of(scrapeWebsiteFailed({serverResponse})))
				);
			})
		)
	);

	constructor(
		private actions$: Actions,
		private scrapeWebsiteApiService: ScrapeWebsiteApiService,
	) {
	}
}
