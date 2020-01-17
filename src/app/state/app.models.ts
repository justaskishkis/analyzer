import {loadingGlobalStateNameSpace} from '../features/loading-global/state/loading-global.constants';
import {ILoadingGlobalState} from '../features/loading-global/state/loading-global.models';

export interface IAppState {
	[loadingGlobalStateNameSpace]: ILoadingGlobalState;
}
