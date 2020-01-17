import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'companypre-list-text-example',
	templateUrl: './list-text-example.component.html',
	styleUrls: ['./list-text-example.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListTextExampleComponent {
	data = [
		'http://www.google.com',
		'http://projects.dsystems.lt/eb/',
	];
}
