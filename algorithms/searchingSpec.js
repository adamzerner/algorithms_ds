describe("Searching algorithms:", function() {
	it("binary search recursive", function() {
		expect(binarySearch([1,2,3,4,5,6], 3)).toBe(2);
		expect(binarySearch([1,2,3,4,5,6], 10)).toBe(-1);
	});
	it("binary search iterative", function() {
		expect(binarySearchIterative([1,2,3,4,5,6], 3)).toBe(2);
		expect(binarySearchIterative([1,2,3,4,5,6], 10)).toBe(-1);
	});
});