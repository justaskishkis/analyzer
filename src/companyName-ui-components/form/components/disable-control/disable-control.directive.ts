import { Directive, Input } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[companypreDisableControl]',
})
export class DisableControlDirective {
	@Input() set companypreDisableControl(condition: boolean) {
		const action = condition ? 'disable' : 'enable';
		if (this.ngControl.control) {
			this.ngControl.control[action]();
		}
	}

	constructor(private ngControl: NgControl) {}
}
