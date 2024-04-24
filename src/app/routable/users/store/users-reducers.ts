import { createReducer, on } from '@ngrx/store';

import * as actions from './users-actions';
import { UsersState } from '../models/users.model';

export const initialState: UsersState = {
	userAPIResponse: null,
	userDetails: null
};

export const UsersReducer = createReducer(
	initialState,
	on(actions.SetUsers, (state: UsersState, action) => ({ ...state, userAPIResponse: action.userAPIResponse })),
	on(actions.SetUserDetails, (state: UsersState, action) => ({ ...state, userDetails: action.user })),
	on(actions.ClearStore, () => initialState)
);
