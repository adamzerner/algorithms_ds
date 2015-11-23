function List() {
	this.data = {};
	this.end = -1;
}

List.prototype.toString = function() {
	var str = '';

	for (var i = 0; i <= this.end; i++) {
		str += this.data[i].toString();
	}

	return str;
};

List.prototype.push = function(el) {
	this.end++;
	this.data[this.end] = el;
};

List.prototype.pop = function(el) {
	if (this.end === -1) {
		throw "an empty list can't pop";
	}

	var toReturn = this.data[this.end];
	this.end--;
	return toReturn;
};

List.prototype.unshift = function(el) {
	for (var i = 0; i <= this.end; i++) {
		this.data[i+1] = this.data[i];
	}

	this.data[0] = el;
	this.end++;
};

List.prototype.shift = function () {
	if (this.end === -1) {
		throw "an empty list can't shift";
	}

	var toReturn = this.data[0];

	for (var i = 0; i <= this.end; i++) {
		this.data[i] = this.data[i+1];
	}

	this.end--;
	return toReturn;
};

List.prototype.read = function(index) {
	return this.data[index];
};

List.prototype.clear = function() {
	if (this.end === -1) {
		throw "an empty list can't clear";
	}

	this.data = {};
	this.end = -1;
};

List.prototype.indexOf = function(el) {
	for (var i = 0; i <= this.end; i++) {
		if (this.data[i] === el) {
			return i;
		}
	}
	return -1;
};

List.prototype.size = function() {
	return this.end + 1;
};

List.prototype.insert = function(el, index) {
	if (index < 0 || index > this.end) {
		throw "can't insert at an invalid index";
	}

	for (var i = this.end + 1; i > index; i--) {
		this.data[i] = this.data[i-1];
	}

	this.data[index] = el;
	this.end++;
};

List.prototype.remove = function(start, end) {
	var range, toReturn = [];
	end = end || start;

	if (this.end === -1) {
		throw "can't remove from an empty list";
	}

	if (start < 0 || end < 0 || start > this.end || end > this.end) {
		throw "can't remove an element that doesn't exist";
	}

	for (var i = start; i <= end; i++) {
		toReturn.push(this.data[i]);
	}

	range = end - start + 1;
	for (var j = end + 1; j <= this.end; j++) {
		this.data[j - range] = this.data[j];
	}
	this.end -= range;

	return toReturn;
};
