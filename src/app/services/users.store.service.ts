import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as actions from '../routable/users/store/users-actions';
import * as selectors from '../routable/users/store/users-selectors';
import { UsersState } from '../routable/users/models/users.model';
import { UserAPIResponse } from '../models/user.model';

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

	clearStore(): void {
		return this.store.dispatch(actions.ClearStore());
	}
}
