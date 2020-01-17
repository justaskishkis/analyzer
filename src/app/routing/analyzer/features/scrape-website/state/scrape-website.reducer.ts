import {Action, createReducer} from '@ngrx/store';
import {onAction} from '../../../../../utils/redux.utils';
import {scrapeWebsite, scrapeWebsiteClear, scrapeWebsiteFailed, scrapeWebsiteSuccess} from './scrape-website.actions';
import {scrapeWebsiteInitialState} from './scrape-website.constants';
import {IScrapeWebsiteState} from './scrape-website.models';
import {ILoading} from '../../../../../features/api-consume/state/api-consume.models';

const reducer = createReducer<IScrapeWebsiteState>(
	scrapeWebsiteInitialState,
	onAction(scrapeWebsite, (draft) => {
		draft.serverResponse = undefined;
		draft.data = undefined;
		draft.loading = ILoading.loading;
	}),
	onAction(scrapeWebsiteSuccess, (draft, payload) => {
		draft.serverResponse = undefined;
		draft.loading = ILoading.loadSuccess;
		draft.data = payload.scrapeWebsiteResponse;
	}),
	onAction(scrapeWebsiteFailed, (draft, payload) => {
		draft.data = undefined;
		draft.loading = ILoading.loadFailed;
		draft.serverResponse = payload.serverResponse;
	}),
	onAction(scrapeWebsiteClear, () => scrapeWebsiteInitialState),
);

// wrapping in a function for AOT build to work...
export function scrapeWebsiteReducer(state: IScrapeWebsiteState, action: Action) {
	return reducer(state, action);
}
