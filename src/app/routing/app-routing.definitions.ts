import { Routes } from '@angular/router';
import { appRoutesPaths } from './app-routing.constants';

export const appRoutesDefinitions: Routes = [
	{
		path: '',
		redirectTo: appRoutesPaths.analyzer.key,
		pathMatch: 'full',
	},
	{
		path: appRoutesPaths.analyzer.key,
		loadChildren: () => import('./analyzer/analyzer.module').then(m => m.AnalyzerModule),
	},
	{
		path: '**',
		redirectTo: appRoutesPaths.analyzer.key,
		pathMatch: 'full',
	},
];
