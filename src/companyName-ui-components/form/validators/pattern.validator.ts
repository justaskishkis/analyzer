import { AbstractControl, Validators } from '@angular/forms';
import { _t } from '../../../app/utils/translate.utils';
import { ICustomValidator } from '../form.models';

export const patternValidator = (pattern: string | RegExp, message?: string) => (
	control: AbstractControl
): ICustomValidator | null => {
	const defaultMessage = _t('form.message.field-is-invalid');

	return Validators.pattern(pattern)(control) ? { patternValidator: { message: message || defaultMessage } } : null;
};
