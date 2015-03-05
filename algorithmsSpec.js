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
describe("Union-Find: ", function() {
	var uf;
	describe('Quick Find', function() {
		beforeEach(function() {
			uf = new UF(10);
			uf.union(0,5);
			uf.union(5,6);
			uf.union(1,2);
			uf.union(2,7);
			uf.union(8,3);
			uf.union(3,4);
			uf.union(4,9);
		});
		it('instantiates', function() {
			uf = new UF(10);
			expect(uf.arr.length).toBe(10);
			for (var i = 0; i < 10; i++) {
				expect(uf.arr[i]).toBe(i);
			}
		});
		it('union', function() {
			expect(uf.arr[0]).toBe(6);
			expect(uf.arr[1]).toBe(7);
			expect(uf.arr[2]).toBe(7);
			expect(uf.arr[3]).toBe(9);
			expect(uf.arr[4]).toBe(9);
			expect(uf.arr[5]).toBe(6);
			expect(uf.arr[6]).toBe(6);
			expect(uf.arr[7]).toBe(7);
			expect(uf.arr[8]).toBe(9);
			expect(uf.arr[9]).toBe(9);
		});
		it('connected', function() {
			expect(uf.connected(0,5)).toBe(true);
			expect(uf.connected(0,6)).toBe(true);
			expect(uf.connected(0,1)).toBe(false);
			expect(uf.connected(9,8)).toBe(true);
			expect(uf.connected(3,7)).toBe(false);
		});
	});
	describe('Quick Union', function() {
		beforeEach(function() {
			uf = new UF2(10);
			uf.union(4,3);
			uf.union(3,8);
			uf.union(6,5);
			uf.union(9,4);
			uf.union(2,1);
			/*
					0     1     5     7     8
					      |     |           |\
					      2     6           3 9
					                        |
					                        4
			*/
		});
		it('instantiates', function() {
			uf = new UF2(10);
			expect(uf.arr.length).toBe(10);
			for (var i = 0; i < 10; i++) {
				expect(uf.arr[i]).toBe(i);
			}
		});
		it('union', function() {
			expect(uf.arr[0]).toBe(0);
			expect(uf.arr[1]).toBe(1);
			expect(uf.arr[2]).toBe(1);
			expect(uf.arr[3]).toBe(8);
			expect(uf.arr[4]).toBe(3);
			expect(uf.arr[5]).toBe(5);
			expect(uf.arr[6]).toBe(5);
			expect(uf.arr[7]).toBe(7);
			expect(uf.arr[8]).toBe(8);
			expect(uf.arr[9]).toBe(8);
		});
		it('connected', function() {
			expect(uf.connected(8,9)).toBe(true);
			expect(uf.connected(5,4)).toBe(false);
			expect(uf.connected(3,8)).toBe(true);
			expect(uf.connected(3,4)).toBe(true);
			expect(uf.connected(3,9)).toBe(true);
			expect(uf.connected(2,6)).toBe(false);
			expect(uf.connected(0,7)).toBe(false);
		});
	});
	describe('Improved Quick Union', function() {
		// weighted unions
		// path compression when calculating the root
		beforeEach(function() {
			uf = new UF3(10);
			uf.union(4,3);
			uf.union(3,8);
			uf.union(6,5);
			uf.union(9,4);
			uf.union(2,1);
			uf.union(5,0);
			/*
					2     4       6     7
					|    /|\     / \
					1   3 8 9   0   5
			*/
		});
		it('instantiates', function() {
			uf = new UF3(10);
			expect(uf.arr.length).toBe(10);
			expect(uf.sz.length).toBe(10);
			for (var i = 0; i < 10; i++) {
				expect(uf.arr[i]).toBe(i);
				expect(uf.sz[i]).toBe(1);
			}
		});
		it('sizes', function() {
			expect(uf.sz[2]).toBe(2);
			expect(uf.sz[4]).toBe(4);
			expect(uf.sz[6]).toBe(3);
			expect(uf.sz[7]).toBe(1);
		});
		it('union', function() {
			expect(uf.arr[0]).toBe(6);
			expect(uf.arr[1]).toBe(2);
			expect(uf.arr[2]).toBe(2);
			expect(uf.arr[3]).toBe(4);
			expect(uf.arr[4]).toBe(4);
			expect(uf.arr[5]).toBe(6);
			expect(uf.arr[6]).toBe(6);
			expect(uf.arr[7]).toBe(7);
			expect(uf.arr[8]).toBe(4);
			expect(uf.arr[9]).toBe(4);
		});
		it('connected', function() {
			expect(uf.connected(1,2)).toBe(true);
			expect(uf.connected(3,9)).toBe(true);
			expect(uf.connected(4,8)).toBe(true);
			expect(uf.connected(6,0)).toBe(true);
			expect(uf.connected(7,1)).toBe(false);
			expect(uf.connected(7,2)).toBe(false);
		});
		describe('path compression', function() {
			beforeEach(function() {
				uf = new UF3(13);
				uf.arr[1] = 0;
				uf.arr[2] = 0;
				uf.arr[3] = 1;
				uf.arr[4] = 1;
				uf.arr[5] = 1;
				uf.arr[6] = 3;
				uf.arr[7] = 3;
				uf.arr[8] = 6;
				uf.arr[9] = 6;
				uf.arr[10] = 8;
				uf.arr[11] = 9;
				uf.arr[12] = 9;
				/*
								0
								|\
								1 2
							 /|\
							3	4 5
						 /|
						6 7
					 / \
					8   9
					|  / \
				 10 11 12

				*/
			});
			it('one pass', function() {
				expect(uf.rootOnePass(9)).toBe(0);
				expect(uf.arr[9]).toBe(3);
				expect(uf.arr[6]).toBe(3);
				expect(uf.arr[3]).toBe(0);
				expect(uf.arr[1]).toBe(0);
			});
			it('two pass', function() {
				expect(uf.rootTwoPass(9)).toBe(0);
				expect(uf.arr[9]).toBe(0);
				expect(uf.arr[6]).toBe(0);
				expect(uf.arr[3]).toBe(0);
				expect(uf.arr[1]).toBe(0);				
			});
		});
	});
});
describe("RPN Calculator", function() { // aka Dijkstra's Algorithm
	it('works', function() {
		expect(rpnCalculator('(1+((2+3)*(4*5)))')).toBe(101);
	});
});
