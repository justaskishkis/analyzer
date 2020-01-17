import { AbstractControl, Validators } from '@angular/forms';
import { _t } from '../../../app/utils/translate.utils';
import { ICustomValidator } from '../form.models';

export const requiredValidator = (message?: string) => (control: AbstractControl): ICustomValidator | null => {
	const defaultMessage = _t('form.message.required-field');

	return Validators.required(control) ? { requiredValidator: { message: message || defaultMessage } } : null;
};
