describe("Recursion: ", function() {
	it("factorial", function() {
		expect(factorial(0)).toBe(1);
		expect(factorial(1)).toBe(1);
		expect(factorial(2)).toBe(2);
		expect(factorial(8)).toBe(40320);
		expect(factorial(11)).toBe(39916800);
	});
	it("fibonacci", function() {
		expect(fibonacci(0)).toBe(0);
		expect(fibonacci(1)).toBe(1);
		expect(fibonacci(2)).toBe(1);
		expect(fibonacci(8)).toBe(21);
		expect(fibonacci(11)).toBe(89);
	});
});