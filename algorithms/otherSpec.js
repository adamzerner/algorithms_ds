describe("Other: ", function() {
	it('Quick Select', function() {
		// returns the kth smallest element
		expect(quickSelect([5,2,4,6,1,3], 1)).toBe(1);
		expect(quickSelect([5,2,4,6,1,3], 2)).toBe(2);
		expect(quickSelect([5,2,4,6,1,3], 3)).toBe(3);
		expect(quickSelect([5,2,4,6,1,3], 4)).toBe(4);
		expect(quickSelect([5,2,4,6,1,3], 5)).toBe(5);
		expect(quickSelect([5,2,4,6,1,3], 6)).toBe(6);
	});
	describe("Bitwise: ", function() {
		it("twoToTen", function() {
			expect(twoToTen(1)).toBe(1);
			expect(twoToTen(11)).toBe(3);
			expect(twoToTen(01)).toBe(1);
			expect(twoToTen(10)).toBe(2);
			expect(twoToTen(1101001)).toBe(105);
		});
		it("tenToTwo", function() {
			expect(tenToTwo(0)).toBe(0);
			expect(tenToTwo(1)).toBe(1);
			expect(tenToTwo(10)).toBe(1010);
			expect(tenToTwo(100)).toBe(1100100);
		});
		it("bitwiseOp", function() {
			expect(bitwiseOp("1", "1", "AND")).toBe(1);
			expect(bitwiseOp("1", "0", "AND")).toBe(0);
			expect(bitwiseOp("0", "1", "AND")).toBe(0);
			expect(bitwiseOp("0", "0", "AND")).toBe(0);

			expect(bitwiseOp("1", "1", "OR")).toBe(1);
			expect(bitwiseOp("1", "0", "OR")).toBe(1);
			expect(bitwiseOp("0", "1", "OR")).toBe(1);
			expect(bitwiseOp("0", "0", "OR")).toBe(0);

			expect(bitwiseOp("1", "1", "XOR")).toBe(0);
			expect(bitwiseOp("1", "0", "XOR")).toBe(1);
			expect(bitwiseOp("0", "1", "XOR")).toBe(1);
			expect(bitwiseOp("0", "0", "XOR")).toBe(0);

			expect(bitwiseOp("1", "1", "NOT")).toBe(0);
			expect(bitwiseOp("1", "0", "NOT")).toBe(0);
			expect(bitwiseOp("0", "1", "NOT")).toBe(0);
			expect(bitwiseOp("0", "0", "NOT")).toBe(1);

		});
		it("bitwise", function() {
			expect(bitwise(10, 6, "AND")).toBe(2);
			expect(bitwise(5, null, "LEFTSHIFT")).toBe(10);
			expect(bitwise(5, null, "RIGHTSHIFT")).toBe(2);
		});
	});
	describe("Maximum subarray:", function() {
		var testArr;
		beforeEach(function() {
			testArr = [100, 113, 110, 85, 105, 102, 86, 63, 81, 101, 94, 106, 101, 79, 94, 90, 97];
			diffArr = getDiffArr(testArr);
		});
		it("O(n^2)", function() {
			expect(bruteForceMaximumSubarray(testArr)).toBe(43);
		});
		describe("O(n*log(n))", function() {
			it("diff arr", function() {
				expect(diffArr).toEqual([13, -3, -25, 20, -3, -16, -23, 18, 20, -7, 12, -5, -22, 15, -4, 7]);
			});
			it("find max crossing subarray", function() {
				expect(findMaxCrossingSubarray(diffArr)).toEqual({
					left: 7,
					right: 10,
					sum: 43
				});
			});
			it("find max subarray", function() {
				expect(findMaxSubarray(testArr)).toBe(43);
			});
		});
		it("O(n)", function() {
			// expect(findMaxSubarrayLinear(testArr)).toBe(43);
			// struggling...
		});
	});
	// skipped matrix multiplication stuff in 4.2
	// watched some videos for 4.3; only have a basic understanding
	// come back to chapter 5 after I learn more math
});