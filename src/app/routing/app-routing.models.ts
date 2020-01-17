import { Params, Route } from '@angular/router';
import { RouterReducerState } from '@ngrx/router-store';

export type IAppRouterState = RouterReducerState<ICurrentRouteState>;

export interface ICurrentRouteState {
	url: string;
	params: Params;
	queryParams: Params;
}

export interface IAppRoute<T> extends Route {
	data?: T;
	children?: IAppRoute<T>[];
}
