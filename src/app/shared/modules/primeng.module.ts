import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [],
	imports: [MenubarModule, InputTextModule, TableModule, ButtonModule],
	exports: [MenubarModule, InputTextModule, TableModule, ButtonModule]
})
export class PrimeNgModule {}
