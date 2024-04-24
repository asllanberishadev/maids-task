import { UserAPIResponse } from '../../../models/user.model';

export interface UsersState {
	userAPIResponse: UserAPIResponse;
}

export interface PageEvent {
	first: number;
	rows: number;
	page: number;
	pageCount: number;
}
