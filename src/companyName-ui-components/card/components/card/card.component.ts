import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'companypre-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
	@Input() total: string;
}
