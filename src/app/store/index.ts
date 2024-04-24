import { ActionReducerMap } from '@ngrx/store';
import { State } from './state.model';
import { AppReducer } from './app.reducers';
import { AppEffects } from './app.effects';

export interface AppState {
	store: State;
}

export const reducers: ActionReducerMap<AppState> = {
	store: AppReducer
};

export const effects: any[] = [AppEffects];
