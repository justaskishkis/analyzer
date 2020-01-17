import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: `companypre-form-field`,
	styleUrls: ['./form-field.component.styl'],
	templateUrl: './form-field.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormFieldComponent {
	@Input() label?: string;

	@Input() required?: boolean;
}
