function Stack() {
	this.data = new Array(5);
	this.top = -1;
}
Stack.prototype._isEmpty = function() {
	return this.top === -1;
};
Stack.prototype._resize = function(size) {
	var temp = new Array(size);
	for (var i = 0, len = size; i < len; i++) {
		temp[i] = this.data[i];
	}
	this.data = temp;
};
Stack.prototype.push = function(el) {
	this.top++;
	if (this.top === this.data.length) {
		this._resize(2 * this.data.length);
	}
	this.data[this.top] = el;
};
Stack.prototype.pop = function() {
	if (this._isEmpty()) throw "an empty stack can't pop";
	var oldTop = this.data[this.top];
	this.data[this.top] = null;
	this.top--;
	if (this.top > 0 && this.top <= this.data.length / 4) {
		this._resize(this.data.length / 2);
	}
	return oldTop;
};
Stack.prototype.size = function() {
	return this.top + 1;
};
Stack.prototype.peek = function() {
	return this.data[this.top];
};
Stack.prototype.clear = function() {
	this.data = {};
	this.top = -1;
};
Stack.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	for (var i = 0; i < this.top; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};