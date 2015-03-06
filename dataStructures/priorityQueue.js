function PriorityQueue() {
	this.pq = [];
}
PriorityQueue.prototype.insert = function(el) {
	this.pq.push(el);
	this._swim(this.pq.length);
};
PriorityQueue.prototype.delMax = function() {
	var max = this.pq[1];
	exch(this.pq, 1, this.pq.length);
	sink(1);
	this.pq[this.pq.length] = null;
	return max;
};
PriorityQueue.prototype._swim = function(k) {
	while (k > 1 && less(this.pq, k/2, k)) {
		exch(this.pq, k, k/2);
		k = k/2;
	}
};
PriorityQueue.prototype._sink = function(k) {
	var N = this.pq.length;
	while (2*k <= N) {
		var j = 2*k;
		if (j < N && less(this.pq, j, j+1)) j++;
		if (!less(this.pq, k, j)) break;
		exch(this.pq, k, j);
		k = j;
	}
};

function less(arr, i, j) {
	return arr[i] < arr[j];
}
function exch(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
}