function UF(n) { // 0..n-1
	this.arr = new Array(n);
	this.sz = new Array(n);
	for (var i = 0; i < n; i++) {
		this.arr[i] = i;
		this.sz[i] = 1;
	}
}
UF.prototype.union = function(i, j) {
	var iRoot = this.root(i);
	var jRoot = this.root(j);
	if (iRoot === jRoot) return;
	if (this.sz[iRoot] < this.sz[jRoot]) {
		this.arr[iRoot] = jRoot;
		this.sz[jRoot] += this.sz[iRoot];
	}
	else {
		this.arr[jRoot] = iRoot;
		this.sz[iRoot] += this.sz[jRoot];
	}
};
UF.prototype.root = function(i) {
	var passed = [];
	while (i !== this.arr[i]) {
		passed.push(i);
		i = this.arr[i];
	}
	var currPassed;
	for (var j = 0, len = passed.length; j < len; j++) {
		currPassed = passed[j];
		this.arr[currPassed] = i;
	}
	return i;
};
UF.prototype.connected = function(i, j) {
	return this.root(i) === this.root(j);
};
