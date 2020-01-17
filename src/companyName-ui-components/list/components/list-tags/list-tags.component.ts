import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'companypre-list-tags',
	templateUrl: './list-tags.component.html',
	styleUrls: ['./list-tags.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTagsComponent {
	@Input() data: string[];
}
