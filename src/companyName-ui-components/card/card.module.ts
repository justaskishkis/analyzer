import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';

const imports = [CommonModule];

const declarations = [CardComponent];

@NgModule({
	imports,
	exports: declarations,
	declarations,
})
export class CompanyPreCardModule {
}
