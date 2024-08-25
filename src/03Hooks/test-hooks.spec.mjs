function makeUrl(str) {
	const baseUrl = 'www.kakon.com/';
	return baseUrl + str;
}

describe('MakeUrl funtion', () => {
	let globalString;

	beforeEach(() => {
		globalString = 'home';
	});

	it('Should return www.kakon.com/home', () => {
		expect(makeUrl(globalString)).toBe('www.kakon.com/home');
	});

	it('Should return www.kakon.com/about', () => {
		globalString = 'about';
		expect(makeUrl(globalString)).toBe('www.kakon.com/about');
	});
});
