import { Component, OnInit } from '@angular/core';
import { User, UserAPIResponse } from '../../../../models/user.model';
import { UsersStoreService } from '../../services/users.store.service';
import { Subject, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
	private destroy$: Subject<void> = new Subject();
	userAPIResponse: UserAPIResponse;
	users: User[];
	currentPage: number;

	constructor(private usersStoreService: UsersStoreService, private router: Router) {}

	ngOnInit(): void {
		this.usersStoreService.getAllUsers();
		this.usersStoreService
			.selectUsers()
			.pipe(takeUntil(this.destroy$))
			.subscribe((res) => {
				if (res) {
					this.userAPIResponse = res;
					this.users = this.userAPIResponse.data;
					this.currentPage = this.userAPIResponse.page;
				}
			});
	}

	changePage(pageNr: number): void {
		if (pageNr >= 1 && pageNr <= this.userAPIResponse.total_pages) {
			this.currentPage = pageNr;
			this.usersStoreService.getAllUsers(this.currentPage);
		}
	}

	searchBy(searchText: string): void {
		this.users =
			searchText === ''
				? this.userAPIResponse.data
				: this.users.filter((user) => {
						return user.id.toString().includes(searchText.toLowerCase());
				  });
	}

	goToUserDetails(userId: string): void {
		this.router.navigate(['/', userId])
	}

	ngOnDestroy(): void {
		this.destroy$.next();
		this.destroy$.complete();
	}
}
