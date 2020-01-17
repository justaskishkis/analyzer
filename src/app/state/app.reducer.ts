import { InjectionToken } from '@angular/core';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IAppState } from './app.models';
import {loadingGlobalReducer} from '../features/loading-global/state/loading-global.reducer';
import {loadingGlobalStateNameSpace} from '../features/loading-global/state/loading-global.constants';

export const appReducers: ActionReducerMap<IAppState> = {
	[loadingGlobalStateNameSpace]: loadingGlobalReducer,
};

export const APP_REDUCERS = new InjectionToken<ActionReducerMap<IAppState>>('app');
export const appReducersProvider = { provide: APP_REDUCERS, useValue: appReducers };

export function logger(reducer: ActionReducer<IAppState>): ActionReducer<IAppState> {
	// tslint:disable-next-line: no-any
	return function(state: IAppState, action: any): IAppState {
		return reducer(state, action);
	};
}

export const metaReducers: MetaReducer<IAppState>[] = !environment.production ? [logger] : [];
