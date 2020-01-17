import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { allButtonTypes } from '../../button.constants';
import { ButtonStyleType } from '../../button.models';

@Component({
	selector: 'button[companypre-button]',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements OnInit {
	@Input() set styleType(value: ButtonStyleType) {
		this.buttonStyleType = value;
		const element = this.elementRef.nativeElement as HTMLElement;

		allButtonTypes.forEach((buttonType) => {
			this.renderer2.removeClass(element, `companypre-button--${buttonType}`);
		});

		this.renderer2.addClass(element, `companypre-button--${this.buttonStyleType}`);
	}

	get styleType(): ButtonStyleType {
		return this.buttonStyleType;
	}

	private buttonStyleType: ButtonStyleType;

	constructor(
		private elementRef: ElementRef,
		private renderer2: Renderer2
	) {}

	ngOnInit(): void {
		const element = this.elementRef.nativeElement as HTMLElement;
		this.renderer2.addClass(element, `companypre-button`);
	}
}
