import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'companypre-form-example',
	templateUrl: './form-example.component.html',
	styleUrls: ['./form-example.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormExampleComponent implements OnInit {
	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
	) {}

	ngOnInit() {
		this.buildFrom();
	}

	submit(): void {
		console.log(this.form.getRawValue());
	}

	private buildFrom(): void {
		this.form = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: [''],
		});
	}
}
