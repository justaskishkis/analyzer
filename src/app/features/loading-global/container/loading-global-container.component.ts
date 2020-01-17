import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import {IAppState} from "../../../state/app.models";
import {loadingGlobalLoadingSelector} from "../state/loading-global.selectors";

@Component({
	selector: 'apppre-loading-global-container',
	templateUrl: './loading-global-container.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingGlobalContainerComponent implements OnInit {
	isLoadingGlobal$: any;

	constructor(
		private store: Store<IAppState>
	) {
	}

	ngOnInit(): void {
		this.isLoadingGlobal$ = this.store.pipe(select(loadingGlobalLoadingSelector));
	}
}
