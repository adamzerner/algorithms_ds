function List() {
	this.data = {};
	this.end = -1;
}

List.prototype.push = function(el) {
	this.end++;
	this.data[this.end] = el;
};

List.prototype.pop = function() {
	if (this.end === -1) {
		throw "an empty list can't pop";
	}

	var toReturn = this.data[this.end];
	delete this.data[this.end];
	this.end--;
	return toReturn;
};

List.prototype.toString = function() {
	if (this.end === -1) {
		return '';
	}

	var str = '';

	for (var i = 0; i <= this.end; i++) {
		str += this.data[i].toString() + ', ';
	}
	str = str.slice(0, -2); // remove trailing ', '

	return str;
};

List.prototype.unshift = function(el) {
	for (var i = this.end; i >= 0; i--) {
		this.data[i+1] = this.data[i];
	}

	this.data[0] = el;
	this.end++;
};

List.prototype.shift = function() {
	if (this.end === -1) {
		throw "an empty list can't shift";
	}

	var toReturn = this.data[0];

	for (var i = 0; i <= this.end-1; i++) {
		this.data[i] = this.data[i+1];
	}

	delete this.data[this.end];
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

	this.data = [];
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
	if (index > this.end + 1) {
		throw "can't insert at an invalid index";
	}

	for (var i = this.end; i >= index; i--) {
		this.data[i+1] = this.data[i];
	}

	this.data[index] = el;
	this.end++;
};

List.prototype.remove = function(start, end) {
	// handle invalid input
	if (this.end === -1) {
		throw "can't remove from an empty list"
	}

	if (start > this.end || end > this.end) {
		throw "can't remove an element that doesn't exist";
	}

	var amountToRemove = end - start + 1;
	var amountToRemove, toReturn, i;

	// get stuff to remove
	if (!end) {
		amountToRemove = 1;
		toReturn = this.data[start];
	}

	else if (end) {
		amountToRemove = end - start + 1;
		toReturn = [];

		for (i = start; i <= end; i++) {
			toReturn.push(this.data[i]);
		}
	}

	// shift stuff over
	for (i = start; i <= this.end - amountToRemove; i++) {
		this.data[i] = this.data[i + amountToRemove];
	}

	// delete unused slots
	for (i = this.end; i > this.end - amountToRemove; i--) {
		delete this.data[i];
	}

	// adjust this.end
	this.end -= amountToRemove;

	return toReturn;
};
