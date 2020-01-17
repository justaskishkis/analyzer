import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ANALYZER_REDUCERS, analyzerReducersProvider } from './state/analyzer.reducer';
import { AnalyzerContainerComponent } from './container/analyzer-container.component';
import { analyzerRoutesDefinitions } from './routing/user-routing.definitions';
import { analyzerStateNameSpace } from './state/analyzer.constants';
import { ScrapeWebsiteEffects } from './features/scrape-website/state/scrape-website.effects';
import { ScrapeWebsiteService } from './features/scrape-website/services/scrape-website.service';
import { ScrapeWebsiteApiService } from './features/scrape-website/services/scrape-website-api.service';
import { ScrapeWebsiteContainerComponent } from './features/scrape-website/container/scrape-website-container.component';
import {
	CompanyPreButtonModule,
	CompanyPreCardModule,
	CompanyPreFormModule,
	CompanyPreListModule
} from '@companyName-ui-components';
import { CompanyPreMessageModule } from '../../../companyName-ui-components/message/message.module';
// tslint:disable-next-line:no-implicit-dependencies
import { CompanyPreBrowserStorageModule } from '@companyName-lib/browser-storage';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
	declarations: [
		AnalyzerContainerComponent, ScrapeWebsiteContainerComponent,
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		CompanyPreListModule,
		CompanyPreMessageModule,
		CompanyPreButtonModule,
		CompanyPreFormModule,
		CompanyPreBrowserStorageModule,
		CompanyPreCardModule,
		RouterModule.forChild(analyzerRoutesDefinitions),
		EffectsModule.forFeature([
			ScrapeWebsiteEffects,
		]),
		StoreModule.forFeature(analyzerStateNameSpace, ANALYZER_REDUCERS),
		TranslateModule.forChild(),
	],
	providers: [
		analyzerReducersProvider, ScrapeWebsiteApiService, ScrapeWebsiteService,
	],
})
export class AnalyzerModule {
}
