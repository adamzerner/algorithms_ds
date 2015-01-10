function insertionSort(arr) {
	for (var i = 1, len = arr.length; i < len; i++) {
		var temp = arr[i];
		var j = i-1;
		while (j >= 0 && arr[j] > temp) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = temp;
	}
	return arr;
}

function insertionSortRecursive(arr) {
	if (arr.length === 1) return arr;
	var left = arr.slice(0, arr.length-1);
	left = insertionSortRecursive(left);
	var i = left.length-1;
	while (i >= 0 && left[i] > arr[arr.length-1]) {
		left[i+1] = left[i];
		i--;
	}
	left[i+1] = arr[arr.length-1];
	return left;
}

function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr;
}

function selectionSort(arr) {
	for (var i = 0, len = arr.length; i < len-1; i++) {
		var smallest = arr[i];
		var smallestIndex = i;
		for (var j = i+1; j < len; j++) {
			if (arr[j] < smallest) {
				smallest = arr[j];
				smallestIndex = j;
			}
		}
		arr = swap(arr, i, smallestIndex);
	}
	return arr;
}

function merge(a, b) {
	var retArr = [];
	var i = j = 0;
	while (i < a.length || j < b.length) {
		if (isNaN(a[i])) {
			retArr.push(b[j]);
			j++;
		}
		else if (isNaN(b[j])) {
			retArr.push(a[i]);
			i++;
		}
		else if (a[i] < b[j]) {
			retArr.push(a[i]);
			i++;
		}
		else {
			retArr.push(b[j]);
			j++;
		}
	}
	return retArr;
}

function mergeSort(arr) {
	if (arr.length <= 6) return insertionSort(arr);
	var mid = Math.floor(arr.length/2);
	var left = arr.slice(0,mid);
	var right = arr.slice(mid);
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
}

function binarySearch(arr, el, start, end) {
	start = start || 0;
	end = end || arr.length-1;
	var mid = Math.floor(start+end/2);
	if (start > end) return -1;
	else if (el === arr[mid]) return mid;
	else if (el < arr[mid]) return binarySearch(arr, el, start, mid-1);
	else if (el > arr[mid]) return binarySearch(arr, el, mid+1, end);
}

function binarySearchIterative(arr, el) {
	var start = 0;
	var end = arr.length-1;
	while (start <= end) {
		var mid = Math.floor(start+end/2);
		if (arr[mid] === el) return mid;
		else if (el < arr[mid]) end = mid-1;
		else if (el > arr[mid]) start = mid+1;
	}
	return -1;
}

function bubbleSort(arr) {
	for (var i = 0; i < arr.length-1; i++) {
		var swapMade = false;
		for (var j = arr.length-1; j > i; j--) {
			if (arr[j] < arr[j-1]) {
				arr = swap(arr, j, j-1);
				swapMade = true;
			}
		}
		if (!swapMade) break;
	}
	return arr;
}

function cocktailSort(arr) {
	var start = 0;
	var end = arr.length-1;
	var swapMade;
	while (start < end) {
		swapMade = false;
		for (var i = start; i < end; i++) {
			if (arr[i] > arr[i+1]) {
				arr = swap(arr, i, i+1);
				swapMade = true;
			}
		}
		if (!swapMade) break;
		end--;

		swapMade = false;
		for (var i = end; i > start; i--) {
			if (arr[i] < arr[i-1]) {
				arr = swap(arr, i, i-1);
				swapMade = true;
			}
		}
		if (!swapMade) break;
		start++;
	}
	return arr;
}

function tenToTwo(num) {
	var retArr = [];	
	while (num) {
		retArr.unshift(num%2);
		num = Math.floor(num/2);
	}
	return +retArr.join('');
}

function twoToTen(num) {
	var result = 0;
	var arr = num.toString().split('');
	var len = arr.length;
	for (var i = len-1; i >= 0; i--) {
		result += Number(arr[i]) * Math.pow(2,len-i-1);
	}
	return result;
}

function bitwiseOp(a,b,str) {
	if (str === 'AND') {
		if (a == 1 && b == 1) return 1;
		else if (a == 1 && b == 0) return 0;
		else if (a == 0 && b == 1) return 0;
		else if (a == 0 && b == 0) return 0;
	}
	else if (str === 'OR') {
		if (a == 1 && b == 1) return 1;
		else if (a == 1 && b == 0) return 1;
		else if (a == 0 && b == 1) return 1;
		else if (a == 0 && b == 0) return 0;
	}
	else if (str === 'XOR') {
		if (a == 1 && b == 1) return 0;
		else if (a == 1 && b == 0) return 1;
		else if (a == 0 && b == 1) return 1;
		else if (a == 0 && b == 0) return 0;
	}
	else if (str === 'NOT') {
		if (a == 1 && b == 1) return 0;
		else if (a == 1 && b == 0) return 0;
		else if (a == 0 && b == 1) return 0;
		else if (a == 0 && b == 0) return 1;
	}
}

function bitwise(a,b,str) {
	a = tenToTwo(a).toString().split('');
	b = tenToTwo(b).toString().split('');
	var retArr = [];
	if (str === "LEFTSHIFT") {
		retArr = a;
		retArr.push("0");
	}
	else if (str === "RIGHTSHIFT") {
		retArr = a;
		retArr.pop();
		retArr.unshift("0");
	}
	else {
		var i = a.length-1;
		var j = b.length-1;
	}
	while (i >= 0 || j >= 0) {
		if (i >= 0 && j >= 0)
			retArr.unshift(bitwiseOp(a[i], b[j], str));
		else if (i >= 0)
			retArr.unshift(bitwiseOp(a[i], 0, str));
		else if (j >= 0)
			retArr.unshift(bitwiseOp(0, b[j], str));
		i--;
		j--;
	}
	var base2 = +retArr.join('');
	return twoToTen(base2);
}

function bruteForceMaximumSubarray(arr) {
	// get the subarray with the greatest max-min
	var data = [];
	var len = arr.length;
	for (var size = 2; size <= len; size++) {
		for (var i = 0; i <= len-size; i++) {
			data.push(arr[i+size-1] - arr[i]);
		}
	}
	return Math.max.apply(null, data);
}

function getDiffArr(A, low, high) {
	var retArr = [];
	low = low || 0;
	high = high || A.length-1;
	for (var i = low+1; i <= high; i++) {
		retArr.push(A[i] - A[i-1]);
	}
	A.pop();
	return retArr;
}
function findMaxCrossingSubarray(A, low, high) {
	low = low || 0;
	high = high || A.length-1;
	var mid = Math.floor((low+high)/2)
	// 0 1 2 3 m 5 6 7 8
	// x x x x x x x x x
	var leftMax = -Infinity;
	var sum = 0;
	var leftIndex;
	var i = mid;
	while (i >= low) {
		sum += A[i]
		if (sum > leftMax) {
			leftMax = sum;
			leftIndex = i;
		}
		i--;
	}

	var rightMax = -Infinity;
	var sum = 0;
	var rightIndex;
	var j = mid+1;
	while (j <= high) {
		sum += A[j];
		if (sum > rightMax) {
			rightMax = sum;
			rightIndex = j;
		}
		j++;
	}
	return {
		left: leftIndex,
		right: rightIndex,
		sum: leftMax + rightMax
	};
}

function findMaxSubarray(arr, low, high, isDiff) {
	if (!isDiff) {
		var arr = getDiffArr(arr);
		low = low || 0;
		high = high || arr.length-1;
	}

	if (low === high) {
		return arr[low];
	}
	else {
		var mid = Math.floor((low+high)/2);
		var leftSum = findMaxSubarray(arr, 0, mid, true);
		var rightSum = findMaxSubarray(arr, mid+1, high, true);
		var crossSum = findMaxCrossingSubarray(arr).sum;
		return Math.max.call(null, leftSum, rightSum, crossSum);
	}
}