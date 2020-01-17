import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DisableControlDirective } from './components/disable-control/disable-control.directive';
import { FormActionsComponent } from './components/form-actions/form-actions.component';
import { FormFieldComponent } from './components/form-field/form-field.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { FormValidationService } from './services/form-validation.service';
import { FormGroupComponent } from './components/form-group/form-group.component';

const imports = [CommonModule, TranslateModule];

const declarations = [
	FormFieldComponent,
	FormActionsComponent,
	FormControlComponent,
	ValidationMessageComponent,
	FormGroupComponent,
	DisableControlDirective,
];

const providers = [FormValidationService];

@NgModule({
	imports,
	exports: declarations,
	declarations,
	providers,
})
export class CompanyPreFormModule {}
