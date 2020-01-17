import {
	IActionCall, ILoading, IServerResponseState,
	IServerResponseStatus,
} from '../../../../../features/api-consume/state/api-consume.models';

export interface IScrapeWebsiteState extends IServerResponseState {
	loading?: ILoading;
	data?: IScrapeWebsiteResponse;
}

export interface IScrapeWebsiteResponse {
	contents: string;
	status: IServerResponseStatus;
}

export interface IScrapeWebsiteRequestData {
	websiteUrl: string;
}

export interface IScrapeWebsiteRequest extends IActionCall {
	request: IScrapeWebsiteRequestData;
}

export interface IMostUsedTagList {
	tagList: string[];
	timesUsed: number;
}

export interface ILongestPathList {
	tagList: string[][];
	length: number;
}

export interface ILongestPathPopularList {
	tagList: string[][];
	length: number;
	timesUsed: number;
}

export interface IAccumulatorOfPaths {
	popularTag: string;
	timesUsed: number;
	arrayList: string[][];
}

export type IUniqueTagList = string[];

export interface IScrapeWebsiteFormFields {
	websiteUrl: string;
}

export interface IDomAllPaths {
	route: any[];
	level: number;
}

export const scrapingHistoryBrowserStorageName = 'scrapingHistory';

export interface IScrapingHistoryItem {
	name: string;
	data: string;
}
