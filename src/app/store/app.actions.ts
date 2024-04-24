import { createAction, props } from '@ngrx/store';

const PREFIX = '[APP]';

export const CLEAR = `${PREFIX} CLEAR`;

export const ClearStore = createAction(CLEAR);
