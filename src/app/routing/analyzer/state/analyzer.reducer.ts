import {InjectionToken} from '@angular/core';
import {ActionReducerMap} from '@ngrx/store';
import {IAnalyzerState} from './analyzer.models';
import {analyzerStateNameSpace} from './analyzer.constants';
import {scrapeWebsiteStateNameSpace} from '../features/scrape-website/state/scrape-website.constants';
import {scrapeWebsiteReducer} from '../features/scrape-website/state/scrape-website.reducer';

export const analyzerReducers: ActionReducerMap<IAnalyzerState> = {
	[scrapeWebsiteStateNameSpace]: scrapeWebsiteReducer,
};

export const ANALYZER_REDUCERS = new InjectionToken<ActionReducerMap<IAnalyzerState>>(analyzerStateNameSpace);
export const analyzerReducersProvider = {provide: ANALYZER_REDUCERS, useValue: analyzerReducers};
