import {createAction, props} from '@ngrx/store';
import {IScrapeWebsiteRequest, IScrapeWebsiteResponse} from './scrape-website.models';
import { IServerResponse } from '../../../../../features/api-consume/state/api-consume.models';

export const scrapeWebsite = createAction(
	'[Analyzer Container] Scrape Website',
	props<{ scrapeWebsiteRequest: IScrapeWebsiteRequest }>()
);

export const scrapeWebsiteSuccess = createAction(
	'[Analyzer Container] Scrape Website Success',
	props<{ scrapeWebsiteResponse: IScrapeWebsiteResponse }>()
);

export const scrapeWebsiteFailed = createAction(
	'[Analyzer Container] Scrape Website Failed',
	props<{ serverResponse: IServerResponse | undefined }>()
);

export const scrapeWebsiteClear = createAction('[Analyzer Container] Scrape Website Clear');
