import { TestBed } from '@angular/core/testing';
import { ApiUtilService } from '../api-utils.service';

describe('ApiUtilsService', () => {
	let service: ApiUtilService;

	beforeEach(() => {
		TestBed.configureTestingModule({providers: [ApiUtilService]});
		service = TestBed.get(ApiUtilService);
	});

	describe('addQueryString method', () => {
		it('adds question mark in the beginning', () => {
			expect(service.addQueryString('abc', {hi: 'sir'})).toBe('abc?hi=sir');
		});

		it('does not add parameters that are undefined', () => {
			expect(service.addQueryString('abc', {hello: undefined, hi: 'sir', goodbye: 'yes'})).toBe(
				'abc?hi=sir&goodbye=yes'
			);
		});

		it('does not add parameters that are empty string', () => {
			expect(service.addQueryString('abc', {hello: 'world', hi: '', goodbye: 'yes'})).toBe(
				'abc?hello=world&goodbye=yes'
			);
		});

		it('does not add question mark if no query parameters are added to string', () => {
			expect(service.addQueryString('abc', {hello: undefined, hi: undefined})).toBe('abc');
		});
	});

	describe('isServerError method', () => {
		it('returns true when status is 500', () => {
			expect(service.isServerError(500)).toBe(true);
		});

		it('returns true when status is 501', () => {
			expect(service.isServerError(501)).toBe(true);
		});

		it('returns true when status is 0 (not existing api endpoint is called)', () => {
			expect(service.isServerError(0)).toBe(true);
		});

		it('returns false when status is 401', () => {
			expect(service.isServerError(401)).toBe(false);
		});

		it('returns false when status is 200', () => {
			expect(service.isServerError(200)).toBe(false);
		});

		it('returns false when status is 404', () => {
			expect(service.isServerError(404)).toBe(false);
		});
	});
});
