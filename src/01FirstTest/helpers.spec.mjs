import { sum } from './helpers.mjs';

describe('Testing Sum Function', () => {
	it('should return 5 + 5 = 10', () => {
		const result = sum(5, 5);
		expect(result).toBe(10);
	});

	it('should return -5 - 5 = -10', () => {
		const result = sum(-5, -5);
		expect(result).toBe(-10);
	});
});
