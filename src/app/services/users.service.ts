import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User, UserAPIResponse } from '../models/user.model';

@Injectable({
	providedIn: 'root'
})
export class UsersService {
	constructor(private http: HttpClient) {}
	/**
	 * Method: GET
	 * URI: /api/users
	 */
	getAllUsers(page: number = 1): Observable<UserAPIResponse> {
		return this.http.get<UserAPIResponse>(`${environment.APP_ENDPOINT_URI}/users?page=${page}`);
	}
}
