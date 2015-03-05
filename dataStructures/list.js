function List() {
	this.data = {};
	this.head = null;
	this.tail = null;
}
List.prototype._isEmpty = function() {
	return this.head === null;
};
List.prototype.size = function() {
	if (this._isEmpty()) return 0;
	return this.tail - this.head + 1;
};
List.prototype.push = function(el) {
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else {
		this.tail++;
		this.data[this.tail] = el;
	}
};
List.prototype.pop = function() {
	if (this._isEmpty()) throw "an empty list can't pop";
	else if (this.size() === 1) {
		var toRet = this.data[this.tail];
		this.data = {};
		this.head = null;
		this.tail = null;
		return toRet;
	}
	else {
		var toRet = this.data[this.tail];
		this.tail--;
		return toRet;
	}
};
List.prototype.unshift = function(el) {
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else {
		this.head--;
		this.data[this.head] = el;
	}
};
List.prototype.shift = function() {
	if (this._isEmpty()) throw "an empty list can't shift";
	else if (this.size() === 1) {
		var toRet = this.data[this.head];
		this.data = {};
		this.head = null;
		this.tail = null;
		return toRet;
	}
	else {
		var toRet = this.data[this.head];
		this.head++;
		return toRet;
	}
};
List.prototype.clear = function() {
	this.data = {};
	this.head = null;
	this.tail = null;
};
List.prototype.indexOf = function(el) {
	for (var i = this.head; i <= this.tail; i++) {
		if (this.data[i] === el) return i - this.head;
	}
	return -1;
};
List.prototype.insert = function(el, pos) {
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else {
		pos += this.head;
		var mid = (this.head+this.tail)/2;
		if (pos < mid) {
			for (var i = this.head; i <= pos-1; i++) {
				this.data[i-1] = this.data[i];
			}
			this.data[pos-1] = el;
			this.head--;
		}
		else if (pos >= mid) {
			for (var i = this.tail; i >= pos; i--) {
				this.data[i+1] = this.data[i];
			}
			this.data[pos] = el;
			this.tail++;
		}
	}
};
List.prototype.removeIndex = function(index) {
	index += this.head;
	if (index < this.head || index > this.tail) throw "can't removeIndex";
	var mid = (this.head+this.tail)/2;
	if (index < mid) {
		for (var i = index; i >= this.head+1; i--) {
			this.data[i] = this.data[i-1];
		}
		this.head++;
	}
	else if (index >= mid) {
		for (var i = index; i <= this.tail-1; i++) {
			this.data[i] = this.data[i+1];
		}
		this.tail--;
	}
};
List.prototype.removeEl = function(el) {
	if (this._isEmpty()) throw "can't removeEl";
	var index = this.indexOf(el);
	if (index === -1) throw "can't removeEl";
	this.removeIndex(index);
};
List.prototype.splice = function(start, num) {
	start += this.head;
	var retArr = [];
	for (var i = start; i < start+num; i++) {
		retArr.push(this.data[i]);
	}
	for (var i = start+num; i <= this.tail; i++) {
		this.data[i-num] = this.data[i];
	}
	this.tail -= num;
	return retArr;
};
List.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	for (var i = this.head; i <= this.tail-1; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};