import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppContainerComponent } from './container/app-container.component';
import { appRoutesDefinitions } from './routing/app-routing.definitions';
import { AppRoutingModule } from './routing/app-routing.module';
import { APP_REDUCERS, appReducersProvider, metaReducers } from './state/app.reducer';
import { ApiConsumeModule } from './features/api-consume/api-consume.module';
import { LoadingGlobalContainerComponent } from './features/loading-global/container/loading-global-container.component';
import { CompanyPreLoadingModule } from '@companyName-ui-components';
import { HeaderContainerComponent } from './features/header/header-container.component';
import { reduxDevToolsName } from './state/app.constants';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(http: HttpClient) {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const declarations = [
	AppContainerComponent, LoadingGlobalContainerComponent, HeaderContainerComponent,
];

const bootstrap = [AppContainerComponent];

const imports = [
	BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	ReactiveFormsModule,
	ApiConsumeModule,
	CompanyPreLoadingModule,
	EffectsModule.forRoot([]),
	StoreModule.forRoot(APP_REDUCERS, {
		metaReducers,
		runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true},
	}),
	StoreDevtoolsModule.instrument({
		name: reduxDevToolsName,
		logOnly: environment.production,
	}),
	RouterModule.forRoot(appRoutesDefinitions, {
		useHash: false,
		enableTracing: false,
	}),
	TranslateModule.forRoot({
		loader: {
			provide: TranslateLoader,
			useFactory: HttpLoaderFactory,
			deps: [HttpClient],
		},
	}),
	ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
];

const providers = [
	appReducersProvider,
];

@NgModule({
	declarations,
	imports,
	bootstrap,
	providers,
})
export class AppModule {
}
