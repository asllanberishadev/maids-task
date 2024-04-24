import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { UsersStoreService } from '../../services/users.store.service';
import { User, UserResponse } from '../../../../models/user.model';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent implements OnDestroy {
	readonly destroy$: Subject<void> = new Subject<void>();
	user: User;

	constructor(private route: ActivatedRoute, private router: Router, private usersStoreService: UsersStoreService) {}

	ngOnInit(): void {
		this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
			const userId = params.get('userId');
			this.usersStoreService.getUserDetails(userId);
		});

		this.usersStoreService
			.selectUserDetails()
			.pipe(takeUntil(this.destroy$))
			.subscribe((user: UserResponse) => {
				if (user) {
					this.user = user.data;
				}
			});
	}

	goToAllUsers(): void {
		this.router.navigate(['/']);
	}

	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
		this.usersStoreService.clearUserDetails();
	}
}
