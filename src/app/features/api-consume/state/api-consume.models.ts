import { HttpHeaders, HttpParams } from '@angular/common/http';

export enum IHttpStatusCode {
	success = 200,
}

export interface IServerResponse {
	headers: {
		normalizedNames: any;
		lazyUpdate: any;
		headers: any;
	},
	status: number;
	statusText: string;
	url: string;
	ok: boolean;
	name: string;
	message: string;
	error: {
		isTrusted: boolean;
	};
}

export interface IServerResponseStatus {
	url: string;
	content_type: string;
	http_code: IHttpStatusCode;
}

export interface IServerResponseState {
	serverResponse?: IServerResponse;
}

export interface IApiRequestOptions {
	showLoadingGlobal?: string;
	isAuthorized?: boolean;
	action?: unknown;
	request?: unknown;
}

export interface IHttpOptions {
	headers?:
		| HttpHeaders
		| {
		[header: string]: string | string[];
	};
	observe?: 'body';
	params?:
		| HttpParams
		| {
		[param: string]: string | string[];
	};
	reportProgress?: boolean;
	responseType?: 'json';
	withCredentials?: boolean;
}

export interface IActionCall {
	action?: any;
	isLoadingGlobal?: boolean;
}

export enum ILoading {
	loading = 'loading',
	loadSuccess = 'loadSuccess',
	loadFailed = 'loadFailed',
}

export type ApiHostConfig = { [key in ApiHost]: string };

export enum ApiHost {
	webApi = 'webApi',
	deviceApi = 'deviceApi',
	analyticsApi = 'analyticsApi',
	backOfficeApi = 'backOfficeApi',
	mockWebApi = 'mockWebApi',
	mockDeviceApi = 'mockDeviceApi',
	mockAnalyticsApi = 'mockAnalyticsApi',
	mockBackOfficeApi = 'mockBackOfficeApi',
}
