import { FormControl } from '@angular/forms';
import { ICustomValidator } from '../../../../companyName-ui-components/form/form.models';
import { requiredValidator } from '../required.validator';

describe('requiredValidator', () => {
	const validText = 'dummy text';
	const invalidText = '';

	it(`handles empty "${validText}" as valid`, () => {
		expect(requiredValidator()(new FormControl(validText))).toBe(null);
	});

	it(`handles "${invalidText}" as invalid`, () => {
		const expected: ICustomValidator = { requiredValidator: { message: 'form.message.required-field' } };
		expect(requiredValidator()(new FormControl(invalidText))).toEqual(expected);
	});

	it(`sets passed error message for invalid text`, () => {
		const message = 'dummy message';
		const expected: ICustomValidator = { requiredValidator: { message } };
		expect(requiredValidator(message)(new FormControl(invalidText))).toEqual(expected);
	});
});
