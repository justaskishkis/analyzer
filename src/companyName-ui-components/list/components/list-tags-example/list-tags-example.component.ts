import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'companypre-list-tags-example',
	templateUrl: './list-tags-example.component.html',
	styleUrls: ['./list-tags-example.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTagsExampleComponent {
	data = [
		'html', 'body', 'div',
		'span', 'a', 'i',
	];
}
