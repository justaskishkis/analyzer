import { Component, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';

@Component({
	selector: 'companypre-validation-message',
	templateUrl: './validation-message.component.html',
	styleUrls: ['./validation-message.component.styl'],
})
export class ValidationMessageComponent {
	@Input() form: FormGroup;

	@Input() key: string;

	messageVisible(): boolean {
		const field = this.form.get(this.key);

		if (!field) {
			return false;
		}

		const { invalid, touched, dirty } = field;

		return invalid && touched && dirty;
	}

	getText(): string {
		const field = this.form.get(this.key);

		if (!field || !field.errors || !Object.keys(field.errors).length) {
			return '';
		}

		const firstError = Object.keys(field.errors).map((errorKey) => (field.errors as ValidationErrors)[errorKey])[0];

		return firstError.message;
	}
}
