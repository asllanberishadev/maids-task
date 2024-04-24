import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './shared/modules/primeng.module';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { effects, reducers } from './store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		PrimeNgModule,
		HttpClientModule,
		StoreModule.forRoot(reducers),
		EffectsModule.forRoot(effects),
		!environment.production ? StoreDevtoolsModule.instrument() : []
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
