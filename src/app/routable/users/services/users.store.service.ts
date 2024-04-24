import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from '../store/users-actions';
import * as selectors from '../store/users-selectors';
import { UsersState } from '../models/users.model';
import { User, UserAPIResponse, UserResponse } from '../../../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UsersStoreService {
	constructor(private store: Store<UsersState>) {}

	getAllUsers(page?: number): void {
		return this.store.dispatch(actions.GetUsers({ page }));
	}

	selectUsers(): Observable<UserAPIResponse> {
		return this.store.select(selectors.selectUsers);
	}

	getUserDetails(userId: string): void {
		return this.store.dispatch(actions.GetUserDetails({ userId }));
	}

	clearUserDetails(): void {
		return this.store.dispatch(actions.ClearUserDetails());
	}

	selectUserDetails(): Observable<UserResponse> {
		return this.store.select(selectors.selectUserDetails);
	}

	clearStore(): void {
		return this.store.dispatch(actions.ClearStore());
	}
}
