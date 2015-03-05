// SEARCHING ALGORITHMS
function binarySearch(arr, val, start, end) {
	if (start > end) return -1;
	start = start || 0;
	end = end || arr.length-1;
	var mid = Math.floor((start+end)/2);
	if (val === arr[mid]) return mid;
	else if (val < arr[mid]) return binarySearch(arr, val, start, mid-1);
	else if (val > arr[mid]) return binarySearch(arr, val, mid+1, end);
}

function binarySearchIterative(arr, val) {
	var start = 0;
	var end = arr.length-1;
	var mid;
	while (start <= end) {
		mid = Math.floor((start+end)/2);
		if (val === arr[mid]) return mid;
		else if (val < arr[mid]) end = mid-1;
		else if (val > arr[mid]) start = mid+1;
	}
	return -1;
}