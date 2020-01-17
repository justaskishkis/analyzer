import { ActionCreator, on } from '@ngrx/store';
import { ActionType } from '@ngrx/store/src/models';
import { On } from '@ngrx/store/src/reducer_creator';
import produce from 'immer';

// Utility method to wrap "immer" and have more concise reducers with the advantage of mutable state
export function onAction<C1 extends ActionCreator, S>(
	creator1: C1,
	callback: (draft: S, payload: ActionType<C1>) => void
): On<S> {
	return on(creator1, (state, creator2) => {
		return produce(state, (draft: S) => callback(draft, creator2));
	});
}
