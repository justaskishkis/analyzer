import { Action, createReducer } from '@ngrx/store';
import { onAction } from '../../../utils/redux.utils';
import { loadingGlobalStart, loadingGlobalStop } from './loading-global.actions';
import { loadingGlobalInitialState } from './loading-global.constants';
import { ILoadingGlobalState } from './loading-global.models';

const reducer = createReducer<ILoadingGlobalState>(
	loadingGlobalInitialState,
	onAction(loadingGlobalStart, (draft, payload) => {
		draft.data = addItem(draft.data, payload.itemToLoad);
	}),
	onAction(loadingGlobalStop, (draft, payload) => {
		draft.data = removeItem(draft.data, payload.itemToUnLoad);
	}),
);

// wrapping in a function for AOT build to work...
export function loadingGlobalReducer(state: ILoadingGlobalState, action: Action) {
	return reducer(state, action);
}

function addItem(loadingArray: string[], itemToLoad: string): string[] {
	const arrayCopy = JSON.parse(JSON.stringify(loadingArray));
	arrayCopy.push(itemToLoad);
	return arrayCopy;
}

function removeItem(loadingArray: string[], itemToLoad: string): string[] {
	const arrayCopy = JSON.parse(JSON.stringify(loadingArray));
	const newArray = arrayCopy.filter(
		(item: string) => item !== itemToLoad
	);
	return newArray;
}
