import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { routerInitialState, routerStateNamespace } from './app-routing.constants';
import { ICurrentRouteState } from './app-routing.models';

const routerStateSelector = createFeatureSelector<RouterReducerState<ICurrentRouteState>>(routerStateNamespace);

export const currentRouteStateSelector = createSelector<
		object,
		RouterReducerState<ICurrentRouteState> | undefined,
		ICurrentRouteState
	>(
	routerStateSelector,
	(routerState) => (routerState ? routerState.state : routerInitialState)
);
