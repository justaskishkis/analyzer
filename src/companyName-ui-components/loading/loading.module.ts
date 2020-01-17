import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingGlobalComponent } from './components/global/loading-global.component';

const imports = [CommonModule];

const declarations = [LoadingGlobalComponent];

@NgModule({
	imports,
	exports: declarations,
	declarations,
})
export class CompanyPreLoadingModule {
}
