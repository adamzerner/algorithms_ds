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
describe("Sorting algorithms:", function() {
	var one, two, multiple;
	beforeEach(function() {
		one = [5];
		two = [5, 2];
		multiple = [5, 2, 4, 6, 1, 3];
		large = [8, 87, 14, 14, 84, 91, 42, 87, 92, 80, 45, 44, 93, 72, 2, 53, 87, 35, 38, 47, 91, 67, 82, 89, 73, 91, 84, 30, 68, 1, 66, 50, 23, 73, 62, 77, 67, 26, 53, 17, 91, 73, 15, 24, 12, 85, 28, 38, 57, 73, 40, 93, 18, 54, 0, 26, 89, 35, 35, 93, 84, 59, 42, 40, 12, 94, 66, 74, 61, 89, 76, 0, 84, 13, 23, 94, 35, 60, 4, 30, 15, 47, 24, 95, 5, 29, 6, 79, 81, 10, 71, 25, 36, 63, 11, 70, 39, 92, 19, 90];
		largeResult = [0, 0, 1, 2, 4, 5, 6, 8, 10, 11, 12, 12, 13, 14, 14, 15, 15, 17, 18, 19, 23, 23, 24, 24, 25, 26, 26, 28, 29, 30, 30, 35, 35, 35, 35, 36, 38, 38, 39, 40, 40, 42, 42, 44, 45, 47, 47, 50, 53, 53, 54, 57, 59, 60, 61, 62, 63, 66, 66, 67, 67, 68, 70, 71, 72, 73, 73, 73, 73, 74, 76, 77, 79, 80, 81, 82, 84, 84, 84, 84, 85, 87, 87, 87, 89, 89, 89, 90, 91, 91, 91, 91, 92, 92, 93, 93, 93, 94, 94, 95];
	});
	it("selection sort", function() {
		expect(selectionSort(one)).toEqual([5]);
		expect(selectionSort(two)).toEqual([2, 5]);
		expect(selectionSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(selectionSort(large)).toEqual(largeResult);
	});
	it("insertion sort iterative", function() {
		expect(insertionSort(one)).toEqual([5]);
		expect(insertionSort(two)).toEqual([2, 5]);
		expect(insertionSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(insertionSort(large)).toEqual(largeResult);
	});
	it("insertion sort recursive", function() {
		expect(insertionSortRecursive(one)).toEqual([5]);
		expect(insertionSortRecursive(two)).toEqual([2, 5]);
		expect(insertionSortRecursive(multiple)).toEqual([1,2,3,4,5,6]);
		expect(insertionSortRecursive(large)).toEqual(largeResult);
	});
	it('shell sort', function() {
		expect(shellSort(one)).toEqual([5]);
		expect(shellSort(two)).toEqual([2, 5]);
		expect(shellSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(shellSort(large)).toEqual(largeResult);
	});
	it("bubble sort", function() {
		expect(bubbleSort(one)).toEqual([5]);
		expect(bubbleSort(two)).toEqual([2, 5]);
		expect(bubbleSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(bubbleSort(large)).toEqual(largeResult);
	});
	it("cocktail sort", function() {
		expect(cocktailSort(one)).toEqual([5]);
		expect(cocktailSort(two)).toEqual([2, 5]);
		expect(cocktailSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(cocktailSort(large)).toEqual(largeResult);
	});
	it("merge", function() {
		expect(merge([1], [1])).toEqual([1,1]);
		expect(merge([1], [2])).toEqual([1,2]);
		expect(merge([2], [1])).toEqual([1,2]);
		expect(merge([2], [1,3])).toEqual([1,2,3]);
		expect(merge([2,5,6], [1,3,4])).toEqual([1,2,3,4,5,6]);
		expect(merge([2,5,6], [1,2,4])).toEqual([1,2,2,4,5,6]);
	});
	it("merge sort", function() {
		expect(mergeSort(one)).toEqual([5]);
		expect(mergeSort(two)).toEqual([2, 5]);
		expect(mergeSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(mergeSort(large)).toEqual(largeResult);
	});
	it("bottom up merge sort", function() {
		// iterative, not recursive
		expect(bottomUpMergeSort(one)).toEqual([5]);
		expect(bottomUpMergeSort(two)).toEqual([2, 5]);
		expect(bottomUpMergeSort(multiple)).toEqual([1,2,3,4,5,6]);
		expect(bottomUpMergeSort(large)).toEqual(largeResult);
	});
	// it("quick sort", function() {
	// 	quickSort(one, 0, one.length-1);
	// 	expect(one).toEqual([5]);
	// 	quickSort(two, 0, two.length-1);
	// 	expect(two).toEqual([2, 5]);
	// 	quickSort(multiple, 0, multiple.length-1);
	// 	expect(multiple).toEqual([1,2,3,4,5,6]);
	// 	quickSort(large, 0, large.length-1);
	// 	expect(large).toEqual(largeResult);
	// });
});
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
