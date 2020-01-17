import {Injectable} from '@angular/core';
import apiDataDevelopment from '../../../../assets/app-data/api-dev.json';
import apiDataProduction from '../../../../assets/app-data/api.json';
import version from '../../../../assets/app-data/version.json';
import {environment} from '../../../../environments/environment';

@Injectable()
export class ApiEndpointService {
	private apiVersion = version.apiVersion;

	getAnalyzerApiEndpoints() {
		const host = `${environment.production ? apiDataProduction.analyzerApi : apiDataDevelopment.analyzerApi}/`;
		return {
			scrapeWebsite: (url: string): string => {
				return host + 'get?url=' + encodeURIComponent(url);
			},
		};
	}
}
