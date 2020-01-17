import {scrapeWebsiteStateNameSpace} from '../features/scrape-website/state/scrape-website.constants';
import {IScrapeWebsiteState} from '../features/scrape-website/state/scrape-website.models';

export interface IAnalyzerState {
	[scrapeWebsiteStateNameSpace]: IScrapeWebsiteState,
}
