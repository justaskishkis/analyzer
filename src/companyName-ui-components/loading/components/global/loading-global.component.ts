import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'companypre-loading-global',
	templateUrl: './loading-global.component.html',
	styleUrls: ['./loading-global.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingGlobalComponent {
}
