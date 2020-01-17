import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {IScrapeWebsiteRequest, IScrapeWebsiteResponse} from '../state/scrape-website.models';
import {BaseApiService} from '../../../../../features/api-consume/services/base-api.service';
import {ApiEndpointService} from '../../../../../features/api-consume/services/api-endpoints.service';

@Injectable()
export class ScrapeWebsiteApiService {

	constructor(
		private baseApiService: BaseApiService,
		private apiEndpointService: ApiEndpointService,
	) {
	}

	scrapeWebsite(scrapeWebsiteRequest: IScrapeWebsiteRequest): Observable<IScrapeWebsiteResponse> {
		const url = this.apiEndpointService.getAnalyzerApiEndpoints().scrapeWebsite(scrapeWebsiteRequest.request.websiteUrl);
		const {action, request} = scrapeWebsiteRequest;
		const requestOptions = {
			showLoadingGlobal: scrapeWebsiteRequest.isLoadingGlobal ? url : '',
			isAuthorized: false,
			action,
			request
		};
		return this.baseApiService.jsonp<IScrapeWebsiteResponse>(url, requestOptions);
	}
}
