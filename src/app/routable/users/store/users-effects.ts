import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, map, mergeMap } from 'rxjs';
import * as UsersActions from './users-actions';
import { UsersService } from '../services/users.service';
import { User, UserAPIResponse, UserResponse } from '../../../models/user.model';

@Injectable()
export class UsersEffects {
	constructor(private actions$: Actions, private usersService: UsersService) {}

	getAllUsers$: Observable<any> = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.GetUsers),
			mergeMap((action) =>
				this.usersService.getAllUsers(action.page).pipe(
					map((userAPIResponse: UserAPIResponse) => {
						return UsersActions.SetUsers({ userAPIResponse });
					})
				)
			)
		)
	);

	getUserDetails$: Observable<any> = createEffect(() =>
		this.actions$.pipe(
			ofType(UsersActions.GetUserDetails),
			mergeMap((action) =>
				this.usersService.getUserDetails(action.userId).pipe(
					map((user: UserResponse) => {
						return UsersActions.SetUserDetails({ user });
					})
				)
			)
		)
	);
}
