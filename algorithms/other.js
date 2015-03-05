// OTHER
function quickSelect(A, k) {
	k--; // kth smallest element has index of k-1
	A = shuffle(A);
	var lo = 0,
		hi = A.length - 1,
		pIndex;
	while (hi > lo) {
		console.log(partition);
		pIndex = partition(A, lo, hi);
		if (pIndex < k) lo = pIndex + 1;
		else if (pIndex > k) hi = pIndex - 1;
		else return A[k];
	}
	return A[k];
}

function tenToTwo(num) {
	var retArr = [];
	while (num) {
		retArr.unshift(num % 2);
		num = Math.floor(num / 2);
	}
	return +retArr.join('');
}

function twoToTen(num) {
	var result = 0;
	var arr = num.toString().split('');
	var len = arr.length;
	for (var i = len - 1; i >= 0; i--) {
		result += Number(arr[i]) * Math.pow(2, len - i - 1);
	}
	return result;
}

function bitwiseOp(a, b, str) {
	if (str === 'AND') {
		if (a == 1 && b == 1) return 1;
		else if (a == 1 && b == 0) return 0;
		else if (a == 0 && b == 1) return 0;
		else if (a == 0 && b == 0) return 0;
	} else if (str === 'OR') {
		if (a == 1 && b == 1) return 1;
		else if (a == 1 && b == 0) return 1;
		else if (a == 0 && b == 1) return 1;
		else if (a == 0 && b == 0) return 0;
	} else if (str === 'XOR') {
		if (a == 1 && b == 1) return 0;
		else if (a == 1 && b == 0) return 1;
		else if (a == 0 && b == 1) return 1;
		else if (a == 0 && b == 0) return 0;
	} else if (str === 'NOT') {
		if (a == 1 && b == 1) return 0;
		else if (a == 1 && b == 0) return 0;
		else if (a == 0 && b == 1) return 0;
		else if (a == 0 && b == 0) return 1;
	}
}

function bitwise(a, b, str) {
	a = tenToTwo(a).toString().split('');
	b = tenToTwo(b).toString().split('');
	var retArr = [];
	if (str === "LEFTSHIFT") {
		retArr = a;
		retArr.push("0");
	} else if (str === "RIGHTSHIFT") {
		retArr = a;
		retArr.pop();
		retArr.unshift("0");
	} else {
		var i = a.length - 1;
		var j = b.length - 1;
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
		for (var i = 0; i <= len - size; i++) {
			data.push(arr[i + size - 1] - arr[i]);
		}
	}
	return Math.max.apply(null, data);
}

function getDiffArr(A, low, high) {
	var retArr = [];
	low = low || 0;
	high = high || A.length - 1;
	for (var i = low + 1; i <= high; i++) {
		retArr.push(A[i] - A[i - 1]);
	}
	A.pop();
	return retArr;
}

function findMaxCrossingSubarray(A, low, high) {
	low = low || 0;
	high = high || A.length - 1;
	var mid = Math.floor((low + high) / 2)
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
	var j = mid + 1;
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
		high = high || arr.length - 1;
	}

	if (low === high) {
		return arr[low];
	} else {
		var mid = Math.floor((low + high) / 2);
		var leftSum = findMaxSubarray(arr, 0, mid, true);
		var rightSum = findMaxSubarray(arr, mid + 1, high, true);
		var crossSum = findMaxCrossingSubarray(arr).sum;
		return Math.max.call(null, leftSum, rightSum, crossSum);
	}
}

function findMaxSubarrayLinear(arr) {
	var maxSubsForEachIndex = [];
}

function shuffle(a) {
	var n = a.length,
		r,
		temp;
	while (n > 1) {
		r = Math.floor(n * Math.random());
		n -= 1;
		temp = a[n];
		a[n] = a[r];
		a[r] = temp;
	}
	return a;
}