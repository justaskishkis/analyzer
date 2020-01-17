import { FormControl } from '@angular/forms';
import { ICustomValidator } from '../../form.models';
import { patternValidator } from '../pattern.validator';

describe('patternValidator', () => {
	const pattern = /[a-z]{4}/;
	const validText = 'abcd';
	const invalidText = 'Abcd';

	describe(`when pattern is "${pattern}"`, () => {
		it(`handles "${validText}" as valid`, () => {
			expect(patternValidator(pattern)(new FormControl(validText))).toBe(null);
		});

		it(`handles "${invalidText}" as invalid`, () => {
			const expected: ICustomValidator = { patternValidator: { message: 'form.message.field-is-invalid' } };
			expect(patternValidator(pattern)(new FormControl(invalidText))).toEqual(expected);
		});

		it(`sets passed error message for invalid email`, () => {
			const message = 'dummy message';
			const expected: ICustomValidator = { patternValidator: { message } };
			expect(patternValidator(pattern, message)(new FormControl(invalidText))).toEqual(expected);
		});
	});
});
