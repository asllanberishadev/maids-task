import { createReducer, on } from '@ngrx/store';

import * as actions from './users-actions';
import { UsersState } from '../models/users.model';

export const initialState: UsersState = {
	userAPIResponse: null
};

export const UsersReducer = createReducer(
	initialState,
	on(actions.SetUsers, (state: UsersState, action) => ({ ...state, userAPIResponse: action.userAPIResponse })),
	on(actions.ClearStore, () => initialState)
);
