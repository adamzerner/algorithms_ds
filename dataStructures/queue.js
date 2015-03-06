function Queue() {
	this.data = {};
	this.front = null;
	this.back = null;
}
Queue.prototype._isEmpty = function() {
	return this.front === null;
};
Queue.prototype.size = function() {
	if (this._isEmpty()) return 0;
	return this.back - this.front + 1;
};
Queue.prototype.enqueue = function(el) {
	// add to the back of the line
	if (this._isEmpty()) {
		this.front = 0;
		this.back = 0;
		this.data[0] = el;
	} else {
		this.back++;
		this.data[this.back] = el;
	}
};
Queue.prototype.dequeue = function() {
	if (this._isEmpty()) throw "an empty queue can't dequeue";
	else if (this.size() === 1) {
		var toRet = this.data[this.front];
		this.front = null;
		this.back = null;
		this.data = {};
		return toRet;
	} else {
		var toRet = this.data[this.front];
		delete this.data[this.front];
		this.front++;
		return toRet;
	}
};
Queue.prototype.peek = function() {
	return this.data[this.front];
};
Queue.prototype.clear = function() {
	this.data = {};
	this.front = null;
	this.back = null;
};
Queue.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = ''
	for (var i = this.front; i < this.back; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};