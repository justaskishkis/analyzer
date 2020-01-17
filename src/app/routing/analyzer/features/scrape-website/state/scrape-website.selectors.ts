import {createFeatureSelector, createSelector} from '@ngrx/store';
import { analyzerStateNameSpace } from '../../../state/analyzer.constants';
import { IAnalyzerState } from '../../../state/analyzer.models';
import { scrapeWebsiteStateNameSpace } from './scrape-website.constants';
import { IScrapeWebsiteResponse, IScrapeWebsiteState } from './scrape-website.models';
import {ILoading} from '../../../../../features/api-consume/state/api-consume.models';

const analyzerStateSelector = createFeatureSelector<IAnalyzerState>(analyzerStateNameSpace);

export const scrapeWebsiteStateSelector = createSelector<object, IAnalyzerState, IScrapeWebsiteState>(
	analyzerStateSelector,
	(state) => state[scrapeWebsiteStateNameSpace]
);

export const scrapeWebsiteLoadingSelector = createSelector<object, IScrapeWebsiteState, undefined | boolean>(
	scrapeWebsiteStateSelector,
	({ loading }) => loading === ILoading.loading
);

export const scrapeWebsiteDataSelector = createSelector<object, IScrapeWebsiteState, undefined | IScrapeWebsiteResponse>(
	scrapeWebsiteStateSelector,
	({ data }) => data
);

export const scrapeWebsiteServerResponseSelector = createSelector<
	object,
	IScrapeWebsiteState,
	unknown
>(
	scrapeWebsiteStateSelector,
	({ serverResponse }) => serverResponse
);
