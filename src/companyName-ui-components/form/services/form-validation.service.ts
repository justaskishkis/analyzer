import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class FormValidationService {
	validateForm(formGroup: FormGroup): void {
		Object.keys(formGroup.controls).forEach((field) => {
			const control = formGroup.get(field);
			if (control instanceof FormControl) {
				control.markAsTouched({ onlySelf: true });
				control.markAsDirty({ onlySelf: true });
			} else if (control instanceof FormGroup) {
				this.validateForm(control);
			}
		});
	}
}
