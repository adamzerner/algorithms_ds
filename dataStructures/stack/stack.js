function Stack() {
	this.data = new Array(5);
	this.top = -1;
}

Stack.prototype.toString = function() {
	var str = '';

	for (var i = 0; i <= this.top; i++) {
		str += this.data[i] + ', ';
	}

	return str.slice(0, -2); // to remove the trailing ', '
};

Stack.prototype.push = function(el) {
	this.top++;

	// if no room left, double the size
	if (this.top === this.data.length) {
		var oldData = this.data;
		this.data = new Array(this.data.length * 2);

		for (var i = 0; i < this.top; i++) {
			this.data[i] = oldData[i];
		}
	}

	this.data[this.top] = el;
};

Stack.prototype.pop = function() {
	if (this.top === -1) {
		throw "can't pop from an empty stack";
	}

	var oldTop = this.data[this.top];
	this.top--;

	// if the data store is <= 25% of its capacity, cut it in half
	if ((this.top + 1) / this.data.length <= .25) {
		var oldData = this.data;
		this.data = new Array(Math.ceil(this.data.length / 2));

		for (var i = 0; i <= this.top; i++) {
			this.data[i] = oldData[i];
		}
	}

	return oldTop;
};

Stack.prototype.peek = function() {
	if (this.top === -1) {
		throw "can't peek in an empty stack";
	}

	return this.data[this.top];
};

Stack.prototype.clear = function() {
	if (this.top === -1) {
		throw "can't clear an empty stack";
	}

	this.data = new Array(5);
	this.top = -1;
};

Stack.prototype.size = function() {
	return this.top + 1;
}
