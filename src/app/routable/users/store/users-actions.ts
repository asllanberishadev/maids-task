import { createAction, props } from '@ngrx/store';
import { User, UserAPIResponse, UserResponse } from '../../../models/user.model';

const PREFIX = '[APP]';

const GET_USERS = `${PREFIX} GET_USERS`;
const SET_USERS = `${PREFIX} SET_USERS`;
const GET_USER_DETAILS = `${PREFIX} GET_USER_DETAILS`;
const SET_USER_DETAILS = `${PREFIX} SET_USER_DETAILS`;
const CLEAR_USER_DETAILS = `${PREFIX} CLEAR_USER_DETAILS`;
export const CLEAR = `${PREFIX} CLEAR`;

export const GetUsers = createAction(GET_USERS, props<{ page?: number }>());
export const SetUsers = createAction(SET_USERS, props<{ userAPIResponse: UserAPIResponse }>());
export const GetUserDetails = createAction(GET_USER_DETAILS, props<{ userId: string }>());
export const SetUserDetails = createAction(SET_USER_DETAILS, props<{ user: UserResponse }>());
export const ClearUserDetails = createAction(CLEAR_USER_DETAILS);
export const ClearStore = createAction(CLEAR);
