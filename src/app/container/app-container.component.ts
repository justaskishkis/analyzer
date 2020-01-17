import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { appLocaleDefault } from '../state/app.constants';

@Component({
	selector: 'apppre-root',
	templateUrl: './app-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppContainerComponent implements OnInit {
	constructor(
		private translateService: TranslateService,
	) {
	}

	ngOnInit(): void {
		this.translateService.setDefaultLang(appLocaleDefault);
	}
}
