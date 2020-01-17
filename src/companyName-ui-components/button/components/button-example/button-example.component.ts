import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { allButtonTypes } from '../../button.constants';
import { ButtonStyleType } from '../../button.models';

@Component({
	selector: 'companypre-button-example',
	templateUrl: './button-example.component.html',
	styleUrls: ['./button-example.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonExampleComponent {
	@Input() disabled: boolean;

	styleTypes: ButtonStyleType[] = allButtonTypes;
}
