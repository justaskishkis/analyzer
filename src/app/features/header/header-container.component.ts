import { ChangeDetectionStrategy, Component } from '@angular/core';
import { _t } from '../../utils/translate.utils';

@Component({
	selector: 'apppre-header-container',
	templateUrl: './header-container.component.html',
	styleUrls: ['./header-container.component.styl'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainerComponent {
	appName = _t('header.heading.your-favorite-analyzer-application');
}
