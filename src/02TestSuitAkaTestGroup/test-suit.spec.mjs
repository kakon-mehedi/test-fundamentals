import { getString } from './test-suit.mjs';

describe('Testing getString Function', () => {
	describe('When params are String', () => {
		it('Should return Kakon Mehedi', () => {
			const result = getString('Kakon Mehedi');
			expect(result).toEqual('Kakon Mehedi');
		});
	});

	describe('When params are Array', () => {
		it('Should return Kakon Mehedi', () => {
			const result = getString(['Kakon', 'Mehedi']);
			expect(result).toBe('Kakon Mehedi');
		});

		it('Should return Hello World', () => {
			const result = getString(['Hello', 'World']);
			expect(result).toBe('Hello World');
		});
	});
});
