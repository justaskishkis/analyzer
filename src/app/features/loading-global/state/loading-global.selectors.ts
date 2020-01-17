import { createFeatureSelector, createSelector } from '@ngrx/store';
import { loadingGlobalStateNameSpace } from './loading-global.constants';
import { ILoadingGlobalState } from './loading-global.models';

const loadingGlobalStateSelector = createFeatureSelector<ILoadingGlobalState>(loadingGlobalStateNameSpace);

export const loadingGlobalLoadingSelector = createSelector<object, ILoadingGlobalState, boolean>(
	loadingGlobalStateSelector,
	({ data }) => data.length > 0
);
