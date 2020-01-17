import { createAction, props } from '@ngrx/store';

export const loadingGlobalStart = createAction(
	'[Http Request] Loading Global Start',
	props<{itemToLoad: string}>()
);

export const loadingGlobalStop = createAction(
	'[Http Request] Loading Global Stop',
	props<{itemToUnLoad: string}>()
);
