import {Routes} from '@angular/router';
import {AnalyzerContainerComponent} from '../container/analyzer-container.component';

export const analyzerRoutesDefinitions: Routes = [
	{
		path: '',
		component: AnalyzerContainerComponent,
		children: []
	}
];
