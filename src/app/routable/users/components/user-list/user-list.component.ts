import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.scss'
})
export class UserListComponent {
	users: User[] = [
		{
			id: 1,
			email: 'george.bluth@reqres.in',
			first_name: 'George',
			last_name: 'Bluth',
			avatar: 'https://reqres.in/img/faces/1-image.jpg'
		},
		{
			id: 2,
			email: 'janet.weaver@reqres.in',
			first_name: 'Janet',
			last_name: 'Weaver',
			avatar: 'https://reqres.in/img/faces/2-image.jpg'
		},
		{
			id: 3,
			email: 'emma.wong@reqres.in',
			first_name: 'Emma',
			last_name: 'Wong',
			avatar: 'https://reqres.in/img/faces/3-image.jpg'
		}
	];
}