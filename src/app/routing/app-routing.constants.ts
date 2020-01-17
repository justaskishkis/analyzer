import { ICurrentRouteState } from './app-routing.models';

export const routerStateNamespace = 'router';

export const routerInitialState: ICurrentRouteState = {
	url: '',
	params: {},
	queryParams: {},
};

export const appRoutesPaths = {
	analyzer: {
		key: 'analyzer',
		value: 'analyzer',
	},
};
