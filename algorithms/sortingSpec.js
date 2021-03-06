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
		expect(selectionSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(selectionSort(large)).toEqual(largeResult);
	});
	it("insertion sort iterative", function() {
		expect(insertionSort(one)).toEqual([5]);
		expect(insertionSort(two)).toEqual([2, 5]);
		expect(insertionSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(insertionSort(large)).toEqual(largeResult);
	});
	it("insertion sort recursive", function() {
		expect(insertionSortRecursive(one)).toEqual([5]);
		expect(insertionSortRecursive(two)).toEqual([2, 5]);
		expect(insertionSortRecursive(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(insertionSortRecursive(large)).toEqual(largeResult);
	});
	it('shell sort', function() {
		expect(shellSort(one)).toEqual([5]);
		expect(shellSort(two)).toEqual([2, 5]);
		expect(shellSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(shellSort(large)).toEqual(largeResult);
	});
	it("bubble sort", function() {
		expect(bubbleSort(one)).toEqual([5]);
		expect(bubbleSort(two)).toEqual([2, 5]);
		expect(bubbleSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(bubbleSort(large)).toEqual(largeResult);
	});
	it("cocktail sort", function() {
		expect(cocktailSort(one)).toEqual([5]);
		expect(cocktailSort(two)).toEqual([2, 5]);
		expect(cocktailSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(cocktailSort(large)).toEqual(largeResult);
	});
	it("merge", function() {
		expect(merge([1], [1])).toEqual([1, 1]);
		expect(merge([1], [2])).toEqual([1, 2]);
		expect(merge([2], [1])).toEqual([1, 2]);
		expect(merge([2], [1, 3])).toEqual([1, 2, 3]);
		expect(merge([2, 5, 6], [1, 3, 4])).toEqual([1, 2, 3, 4, 5, 6]);
		expect(merge([2, 5, 6], [1, 2, 4])).toEqual([1, 2, 2, 4, 5, 6]);
	});
	it("merge sort", function() {
		expect(mergeSort(one)).toEqual([5]);
		expect(mergeSort(two)).toEqual([2, 5]);
		expect(mergeSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
		expect(mergeSort(large)).toEqual(largeResult);
	});
	it("bottom up merge sort", function() {
		// iterative, not recursive
		expect(bottomUpMergeSort(one)).toEqual([5]);
		expect(bottomUpMergeSort(two)).toEqual([2, 5]);
		expect(bottomUpMergeSort(multiple)).toEqual([1, 2, 3, 4, 5, 6]);
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