import { RouterStateSnapshot } from '@angular/router';
import { RouterStateSerializer } from '@ngrx/router-store';
import { ICurrentRouteState } from './app-routing.models';

export class CustomRouteSerializerService implements RouterStateSerializer<ICurrentRouteState> {
	serialize(routerState: RouterStateSnapshot): ICurrentRouteState {
		let route = routerState.root;

		while (route.firstChild) {
			route = route.firstChild;
		}

		const {
			url,
			root: { queryParams },
		} = routerState;
		const { params } = route;

		return { url, params, queryParams };
	}
}
