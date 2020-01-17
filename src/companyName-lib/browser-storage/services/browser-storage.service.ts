import { Injectable } from '@angular/core';

@Injectable()
export class BrowserStorageService {
	// tslint:disable-next-line: no-any
	setItem(itemName: string, value: any): void {
		const valueToStore = typeof value === 'string' ? value : JSON.stringify(value);
		window.localStorage.setItem(itemName, valueToStore);
	}

	getItem<T = void>(
		itemName: string & (T extends void ? 'Specify return type of the function call' : string)
	): T | null {
		const item = window.localStorage.getItem(itemName);

		if (item === null || item === 'undefined') {
			return null;
		}

		try {
			return JSON.parse(item) as T;
		} catch (_) {
			// localStorage.getItem() returns string always,
			// but in this case we want to say that we know it is NOT string
			return (item as unknown) as T;
		}
	}

	removeItem(key: string): void {
		window.localStorage.removeItem(key);
	}
}
