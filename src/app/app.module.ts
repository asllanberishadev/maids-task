import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './shared/modules/primeng.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent, HeaderComponent],
	imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule, FormsModule, PrimeNgModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
