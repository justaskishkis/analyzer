import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'companypre-loading-global-example',
	templateUrl: './loading-global-example.component.html',
	styleUrls: ['./loading-global-example.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingGlobalExampleComponent {
}
