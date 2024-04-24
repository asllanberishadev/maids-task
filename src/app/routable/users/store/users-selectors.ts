import { createSelector, createFeatureSelector } from '@ngrx/store';
import { UsersState } from '../models/users.model';

export const selectState = createFeatureSelector<UsersState>('users');

export const selectUsers = createSelector(selectState, (state: UsersState) => state.userAPIResponse);
