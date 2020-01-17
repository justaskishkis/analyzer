import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'companypre-card-example',
	templateUrl: './card-example.component.html',
	styleUrls: ['./card-example.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardExampleComponent {
}
