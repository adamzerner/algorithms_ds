describe("RPN Calculator", function() { // aka Dijkstra's Algorithm
	it('works', function() {
		expect(rpnCalculator('(1+((2+3)*(4*5)))')).toBe(101);
	});
});