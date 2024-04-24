import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { PrimeNgModule } from '../../shared/modules/primeng.module';
import { UsersRoutingModule } from './users-routing.module';
import { StoreModule } from '@ngrx/store';
import { UsersReducer } from './store/users-reducers';
import { UsersEffects } from './store/users-effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [UserListComponent, HeaderComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		PrimeNgModule,
		UsersRoutingModule,
		HttpClientModule,
		StoreModule.forFeature('users', UsersReducer),
		EffectsModule.forFeature([UsersEffects])
	]
})
export class UsersModule {}
