function Grid(n) { // nxn
	var i, j;
	this.N = n;
	this.virtualTop = n*n;
	this.virtualBottom = n*n+1;
	// initialize the 2D grid
	this.grid = new Array(n);
	for (i = 0; i < n; i++) {
		this.grid[i] = new Array(n);
		for (j = 0; j < n; j++) {
			this.grid[i][j] = 'closed';
		}
	}
	// initialize the UF
	this.uf = new UF(n*n+2); // +2 for the virtualTop and virtualBottom
	for (i = 0; i < n; i++) {
		this.uf.union(this.virtualTop, i);
	}
	for (i = n*n-1; i >= n*n-n; i--) {
		this.uf.union(this.virtualBottom, i);
	}
}
Grid.prototype.open = function(i, j) {
	this.grid[i][j] = 'open';
	var curr = twoD_to_oneD(i, j, this.N);
	var adjacent;
	if (this.isOpen(i, j-1)) {
		adjacent = twoD_to_oneD(i, j-1, this.N);
		this.uf.union(curr, adjacent);
	}
	if (this.isOpen(i, j+1)) {
		adjacent = twoD_to_oneD(i, j+1, this.N);
		this.uf.union(curr, adjacent);
	}
	if (this.isOpen(i-1, j)) {
		adjacent = twoD_to_oneD(i-1, j, this.N);
		this.uf.union(curr, adjacent);
	}
	if (this.isOpen(i+1, j)) {
		adjacent = twoD_to_oneD(i+1, j, this.N);
		this.uf.union(curr, adjacent);
	}
};
Grid.prototype.isOpen = function(i, j) {
	if (i < 0 || i >= this.N || j < 0 || j >= this.N) return false;
	return this.grid[i][j] === 'open';
};
Grid.prototype.isFull = function(i, j) {
	var curr = twoD_to_oneD(i, j, this.N);
	return this.uf.connected(this.virtualTop, curr);
};
Grid.prototype.percolates = function(i, j) {
	return this.uf.connected(this.virtualTop, this.virtualBottom);
};

// helpers
function oneD_to_twoD(n, N) {
	var row = Math.floor(n/N);
	var col = n-row*N;
	return [row, col];
}
function twoD_to_oneD(i, j, N) {
	return i*N + j;
}