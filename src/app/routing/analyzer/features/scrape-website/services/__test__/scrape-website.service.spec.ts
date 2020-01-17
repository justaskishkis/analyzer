import { TestBed } from '@angular/core/testing';
import { ScrapeWebsiteService } from '../scrape-website.service';
import { validHtmlString } from '../__mock__/test-mock-data';

describe('ApiUtilsService', () => {
	let service: ScrapeWebsiteService;

	beforeEach(() => {
		TestBed.configureTestingModule({ providers: [ScrapeWebsiteService] });
		service = TestBed.get(ScrapeWebsiteService);
	});

	describe('getUniqueTagList method', () => {
		it('returns unique tag list if provided with this mocked html string', () => {
			expect(service.getUniqueTagList(validHtmlString)).toBe(['body', 'div', 'head', 'html', 'li', 'title', 'ul']);
		});
	});

	describe('getMostUsedTagList method', () => {
		it('returns most used tag list if provided with this mocked html string', () => {
			expect(service.getMostUsedTagList(validHtmlString)).toBe({
				tagList: ['li'],
				timesUsed: 2}
			);
		});
	});
});
