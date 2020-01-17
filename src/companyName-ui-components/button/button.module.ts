import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';

const imports = [CommonModule];

const declarations = [ButtonComponent];

@NgModule({
	imports,
	exports: declarations,
	declarations,
})
export class CompanyPreButtonModule {
}
