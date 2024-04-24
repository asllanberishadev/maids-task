import { User, UserAPIResponse, UserResponse } from '../../../models/user.model';

export interface UsersState {
	userAPIResponse: UserAPIResponse;
	userDetails: UserResponse;
}

export interface PageEvent {
	first: number;
	rows: number;
	page: number;
	pageCount: number;
}
