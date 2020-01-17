import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MessageComponent } from './components/message/message.component';

const imports = [CommonModule];

const declarations = [MessageComponent];

@NgModule({
	imports,
	exports: declarations,
	declarations,
})
export class CompanyPreMessageModule {
}
