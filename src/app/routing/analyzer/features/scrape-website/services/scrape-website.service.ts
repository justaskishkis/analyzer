import { Injectable } from '@angular/core';
import {
	IAccumulatorOfPaths,
	IDomAllPaths,
	ILongestPathList,
	ILongestPathPopularList,
	IMostUsedTagList,
	IUniqueTagList
} from '../state/scrape-website.models';
// tslint:disable-next-line:no-implicit-dependencies
import { BrowserStorageService } from '@companyName-lib/browser-storage';

@Injectable()
export class ScrapeWebsiteService {
	allElementRoutes: Element[][] = [];

	allElementRoutesString: string[][] = [];

	route: Element[] = [];

	private mostUsedTagList: string[];

	constructor(
		private browserStorageService: BrowserStorageService,
	) {
	}

	getUniqueTagList(data: string): IUniqueTagList {
		const tagListSorted = this.getAllTagsFromDomSorted(data);
		const uniqueTagList: string[] = [];
		tagListSorted.map(function (tagName: string) {
			if (!uniqueTagList.includes(tagName)) {
				uniqueTagList.push(tagName);
			}
		});
		return uniqueTagList;
	};

	getMostUsedTagList(data: string): IMostUsedTagList {
		const items = this.getAllTagsFromDomSorted(data);
		let tagList: string[] = [];
		let timesUsed = 0;
		let currentItem = '';
		let currentTimesUsed = 0;
		for (let i = 0; i < items.length; i++) {
			const isLastItem = i === items.length - 1;
			if (isLastItem || items[i] !== currentItem) {
				if (currentTimesUsed > 0 && currentTimesUsed > timesUsed) {
					const newArray: string[] = [currentItem];
					tagList = newArray;
					timesUsed = currentTimesUsed;
				} else if (currentTimesUsed > 0 && currentTimesUsed === timesUsed) {
					tagList.push(items[i]);
				}
				currentItem = items[i];
				currentTimesUsed = 1;
			} else {
				currentTimesUsed++;
			}
		}
		this.mostUsedTagList = tagList;
		return {tagList, timesUsed};
	};

	getLongestPathList(): ILongestPathList {
		const accumulatorInitial: ILongestPathList = {
			tagList: [],
			length: 0,
		};
		const reducer = (accumulator: ILongestPathList, currentValue: string[]) => {
			if (currentValue.length === accumulator.length) {
				const newArray: string[][] = accumulator.tagList;
				newArray.push(currentValue);
				return {
					tagList: newArray,
					length: accumulator.length,
				};
			}
			if (currentValue.length > accumulator.length) {
				const newArray: string[][] = [];
				newArray.push(currentValue);
				return {
					tagList: newArray,
					length: currentValue.length,
				};
			}
			return {
				tagList: accumulator.tagList,
				length: accumulator.length,
			};
		};
		return this.allElementRoutesString.reduce(reducer, accumulatorInitial);
	}

	getLongestPathWithMostPopularTag(): ILongestPathPopularList {
		// get all most popular items longest paths with it used most times
		const allPopularTagsLongestPaths: IAccumulatorOfPaths[] = [];
		const getPopularTagLongestPath = (tagName: string): IAccumulatorOfPaths => {
			const initialAccumulator: IAccumulatorOfPaths = {
				popularTag: tagName,
				timesUsed: 0,
				arrayList: [],
			};
			const reducer = ( accumulator: IAccumulatorOfPaths, currentValue: string[] ): IAccumulatorOfPaths => {
				const itemTimesUsed: number = currentValue.filter((item: string) => item === accumulator.popularTag).length;
				if (itemTimesUsed > accumulator.timesUsed) {
					const newArray: string[][] = [currentValue];
					return {
						popularTag: accumulator.popularTag,
						timesUsed: itemTimesUsed,
						arrayList: newArray,
					};
				}
				if (itemTimesUsed > 0 && itemTimesUsed === accumulator.timesUsed) {
					const newArray: string[][] = accumulator.arrayList;
					newArray.push(currentValue);
					return {
						popularTag: accumulator.popularTag,
						timesUsed: itemTimesUsed,
						arrayList: newArray,
					};
				}
				return {
					popularTag: accumulator.popularTag,
					timesUsed: accumulator.timesUsed,
					arrayList: accumulator.arrayList,
				};
			};
			const {
				popularTag,
				timesUsed,
				arrayList
			} = this.allElementRoutesString.reduce( reducer, initialAccumulator );
			const longestPathLength = arrayList.sort(
				(a, b) => b.length - a.length)[0].length;
			const longestPathList = arrayList.filter(item => item.length === longestPathLength);
			return { popularTag, timesUsed, arrayList: longestPathList };
		};
		for (const item of this.mostUsedTagList) {
			allPopularTagsLongestPaths.push(getPopularTagLongestPath(item));
		}

		// get the popular items that where used most times in their longest path
		const mostTimesUsed = allPopularTagsLongestPaths.sort(
			(a, b) => b.timesUsed - a.timesUsed
		)[0].timesUsed;
		const result = allPopularTagsLongestPaths.filter(item => item.timesUsed === mostTimesUsed);

		// concat the wanted items paths into one array
		let resultTagList: string[][] = [];
		for (const item of result) {
			resultTagList = [...resultTagList, ...item.arrayList]
		}

		return {
			tagList: resultTagList,
			length: resultTagList[0].length,
			timesUsed: mostTimesUsed,
		};
	}

	getAllRoutesFromDomToString(data: string): void {
		const htmlDocument = this.parseHtmlDocumentString(data);
		const getDomAllPaths = (root: Document | Element): IDomAllPaths => {
			let pathInfo: IDomAllPaths = {
				route: [],
				level: 0,
			};
			for (let i = 0, j = root.children.length; i < j; i++) {
				const curNodePathInfo: any = getDomAllPaths(root.children[i]);
				if (curNodePathInfo.route[0].children.length === 0) {
					this.route.unshift(curNodePathInfo.route[0]);
					this.route.unshift(curNodePathInfo.route[0].parentNode);
					parents(curNodePathInfo.route[0].parentNode);
				}
				pathInfo = curNodePathInfo;
			}
			pathInfo.route.unshift(root);
			pathInfo.level += 1;
			return pathInfo;
		};
		// tslint:disable-next-line
		const parents = (element: any) => {
			if (element.parentNode) {
				this.route.unshift(element.parentNode);
				parents(element.parentNode);
			} else {
				this.allElementRoutes.push(this.route);
				this.route = [];
			}
		};
		const _ = getDomAllPaths(htmlDocument);
		this.allElementRoutesString = this.allElementRoutes.map(
			(item: Element[]) => item.map(
				(item2: Element) => item2.nodeName.toLowerCase()
			)
		);
	}

	saveItem(itemName: string, itemValue: string): void {
		this.browserStorageService.setItem(itemName, itemValue);
	}

	private getAllTagsFromDomSorted(data: string): string[] {
		const htmlDocument = this.parseHtmlDocumentString(data);
		const elements = [].slice.call(htmlDocument.getElementsByTagName('*'));
		const tagList = elements.map((item: Element) => item.localName.toLowerCase());
		const isValidTagList = tagList.length > 0;
		return isValidTagList ? tagList.sort() : [];
	}

	private parseHtmlDocumentString(data: string): Document {
		const domParser = new DOMParser();
		const htmlDocument = domParser.parseFromString(data, 'text/html');
		return htmlDocument;
	}
}

