import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {finalize} from 'rxjs/operators';
import {IAppState} from '../../../state/app.models';
import {IApiRequestOptions, IHttpOptions} from '../state/api-consume.models';
import {loadingGlobalStart, loadingGlobalStop} from "../../loading-global/state/loading-global.actions";

@Injectable()
export class BaseApiService {

	constructor(
		private httpClient: HttpClient,
		private store: Store<IAppState>,
	) {
	}

	jsonp<T>(url: string, options?: IApiRequestOptions): Observable<T> {
		const request$ = this.httpClient.jsonp<T>(url, 'callback');
		return this.prepareRequest(request$, options);
	}

	get<T>(url: string, options?: IApiRequestOptions): Observable<T> {
		const modifiedOptions = this.modifyRequestOptions(options);
		const request$ = this.httpClient.get<T>(url, modifiedOptions);
		return this.prepareRequest(request$, options);
	}

	private prepareRequest<T>(request$: Observable<T>, options?: IApiRequestOptions): Observable<T> {
		const modifiedRequest1$ = this.addLoadingGlobalHandling$(request$, options);
		return modifiedRequest1$;
	}

	private addLoadingGlobalHandling$<T>(
		request$: Observable<T>,
		options?: IApiRequestOptions
	): Observable<T> {
		if (!options || !options.showLoadingGlobal) {
			return request$;
		}
		const loadingItem = options.showLoadingGlobal ? options.showLoadingGlobal : '';
		this.store.dispatch(loadingGlobalStart({itemToLoad: loadingItem}));
		return request$.pipe(
			finalize(() => {
				this.store.dispatch(
					loadingGlobalStop({itemToUnLoad: loadingItem})
				);
			})
		);
	}

	private modifyRequestOptions(options?: IApiRequestOptions): IHttpOptions {
		const modifiedOptions: IHttpOptions = {};
		return modifiedOptions;
	}
}
