import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { routerStateNamespace } from './app-routing.constants';
import { CustomRouteSerializerService } from './custom-route-serializer.service';

const imports = [
	StoreModule.forFeature(routerStateNamespace, routerReducer),
	StoreRouterConnectingModule.forRoot({
		serializer: CustomRouteSerializerService,
	}),
];

const exports = [RouterModule];

@NgModule({
	imports,
	exports,
})
export class AppRoutingModule {}
