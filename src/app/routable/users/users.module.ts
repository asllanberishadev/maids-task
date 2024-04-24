import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { PrimeNgModule } from '../../shared/modules/primeng.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
	declarations: [UserListComponent],
	imports: [PrimeNgModule, UsersRoutingModule]
})
export class UsersModule {}
