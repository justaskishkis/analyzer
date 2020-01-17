import { ChangeDetectionStrategy, Component, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: 'input[companypre-form-control]',
	templateUrl: './form-control.component.html',
	styleUrls: ['./form-control.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormControlComponent implements OnInit {
	constructor(private elementRef: ElementRef) {}

	ngOnInit(): void {
		(this.elementRef.nativeElement as HTMLElement).classList.add(
			'companypre-form__control'
		);
	}
}
