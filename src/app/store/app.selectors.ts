import { createSelector } from '@ngrx/store';
import { AppState } from './index';
import { State } from './state.model';

export const selectState = (state: AppState) => state.store;
