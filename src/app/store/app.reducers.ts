import { createReducer, on } from '@ngrx/store';
import { State } from './state.model';
import * as actions from './app.actions';

export const initialState: State = {};

export const AppReducer = createReducer(
	initialState,
	on(actions.ClearStore, () => initialState)
);
