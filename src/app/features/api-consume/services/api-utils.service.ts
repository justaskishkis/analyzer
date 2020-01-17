import { Injectable } from '@angular/core';

@Injectable()
export class ApiUtilService {
	addQueryString(url: string, queryParams: {}): string {
		const str = Object.keys(queryParams).reduce((acc, key) => {
			// tslint:disable-next-line: no-any
			const value = (queryParams as any)[key];
			const queryString = value !== undefined && value !== '' ? `&${key}=${value}` : ``;
			return acc + queryString;
		}, '');

		return url + (str !== '' ? `?${str.substr(1)}` : ``);
	}

	isServerError(responseStatusCode: number): boolean {
		return responseStatusCode === 0 || responseStatusCode.toString().startsWith('5');
	}
}
