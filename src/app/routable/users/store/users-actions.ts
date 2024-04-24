import { createAction, props } from '@ngrx/store';
import { UserAPIResponse } from '../../../models/user.model';

const PREFIX = '[APP]';

const GET_USERS = `${PREFIX} GET_USERS`;
const SET_USERS = `${PREFIX} SET_USERS`;
export const CLEAR = `${PREFIX} CLEAR`;

export const GetUsers = createAction(GET_USERS, props<{ page?: number }>());
export const SetUsers = createAction(SET_USERS, props<{ userAPIResponse: UserAPIResponse }>());
export const ClearStore = createAction(CLEAR);
