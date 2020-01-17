import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'companypre-form-group',
	templateUrl: './form-group.component.html',
	styleUrls: ['./form-group.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormGroupComponent {
}
