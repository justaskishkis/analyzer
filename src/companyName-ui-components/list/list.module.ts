import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListTextComponent } from './components/list-text/list-text.component';
import { ListTagsComponent } from './components/list-tags/list-tags.component';

const imports = [CommonModule];

const declarations = [ListTextComponent, ListTagsComponent,];

@NgModule({
	imports,
	exports: declarations,
	declarations,
})
export class CompanyPreListModule {
}
