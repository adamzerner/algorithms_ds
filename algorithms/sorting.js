// SORTING
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}

function selectionSort(arr) {
	var min, minIndex;
	for (var i = 0, len = arr.length; i < len - 1; i++) {
		min = arr[i];
		minIndex = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < min) {
				min = arr[j];
				minIndex = j;
			}
		}
		swap(arr, i, minIndex);
	}
	return arr;
}

function insertionSort(arr) {
	var temp, j;
	for (var i = 1, len = arr.length; i < len; i++) {
		temp = arr[i];
		j = i - 1;
		while (j >= 0 && arr[j] > temp) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = temp;
	}
	return arr;
}

function insertionSortRecursive(arr) {
	if (arr.length === 1) return arr;
	var last = arr[arr.length - 1];
	var left = arr.slice(0, arr.length - 1);
	left = insertionSortRecursive(left);
	var i = left.length - 1;
	while (i >= 0 && left[i] > last) {
		left[i + 1] = left[i];
		i--;
	}
	left[i + 1] = last;
	return left;
}

function shellSort(arr) {
	var len = arr.length;
	var h = 1;

	// set h based on 3x+1 sequence
	while (h < len / 3) h = 3 * h + 1; // 1, 4, 13, 40, 121...

	while (h >= 1) {
		for (var i = h; i < len; i++) {
			for (var j = i; j >= h; j -= h) {
				if (arr[j] < arr[j - h]) swap(arr, j, j - h);
			}
		}
		h = Math.floor(h / 3);
	}
	return arr;
}

function bubbleSort(arr) {
	var swapMade;
	for (var end = arr.length - 2; end >= 0; end--) {
		swapMade = false;
		for (var i = 0; i <= end; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
				swapMade = true;
			}
		}
		if (!swapMade) break;
	}
	return arr;
}

function cocktailSort(arr) {
	var start = 0;
	var end = arr.length - 2;
	var i;
	while (start <= end) {
		for (i = start; i <= end; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(arr, i, i + 1);
			}
		}
		start++
		for (i = end; i >= start; i--) {
			if (arr[i] < arr[i - 1]) {
				swap(arr, i, i - 1);
			}
		}
		end--;
	}
	return arr;
}

function merge(a, b) {
	var retArr = [];
	var i = j = 0;
	var aLen = a.length;
	var bLen = b.length;
	while (i < aLen || j < bLen) {
		if (i === aLen) {
			retArr.push(b[j]);
			j++;
		} else if (j === bLen) {
			retArr.push(a[i]);
			i++;
		} else if (a[i] < b[j]) {
			retArr.push(a[i]);
			i++;
		} else {
			retArr.push(b[j]);
			j++;
		}
	}
	return retArr;
}

function mergeSort(arr) {
	if (arr.length === 1) return arr;
	var mid = Math.floor(arr.length / 2);
	var left = arr.slice(0, mid);
	var right = arr.slice(mid);
	left = mergeSort(left);
	right = mergeSort(right);
	return merge(left, right);
}

function bottomUpMergeSort(arr) {
	var len = arr.length;
	var left, right, result;
	for (var sz = 1; sz < len; sz += sz) {
		for (var lo = 0; lo < len - sz; lo += 2 * sz) {
			left = arr.slice(lo, lo + sz);
			right = arr.slice(lo + sz, lo + sz + sz);
			result = merge(left, right);
			Array.prototype.splice.apply(arr, [lo, result.length].concat(result));
		}
	}
	return arr;
}

function quickSort(arr, start, end) {
	if (start < end) {
		var pIndex = randomizedPartition(arr, start, end); // get pIndex
		quickSort(arr, start, pIndex - 1); // sort left half
		quickSort(arr, pIndex + 1, end); // sort right half
	}
}

function partition(arr, start, end) {
	var pivot = arr[end];
	var pIndex = start;
	for (var i = start; i < end; i++) {
		if (arr[i] <= pivot) {
			swap(arr, i, pIndex);
			pIndex++;
		}
	}
	swap(arr, end, pIndex);
	return pIndex;
}

function test(arr, start, end) {
	partition(arr, start, end);
}

function randomizedPartition(arr, start, end) {
	var r = Math.floor(Math.random() * (end - start + 1)) + start;
	swap(arr, r, end);
	return partition(arr, start, end);
}