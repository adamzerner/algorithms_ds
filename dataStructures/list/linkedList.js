function Node(el) {
	this.data = el;
	this.next = null;
}

function LinkedList() {
	this.head = new Node('head');
	this._size = 0;
}

LinkedList.prototype.push = function(el) {
	var newNode = new Node(el);

	var curr = this.head;

	while (curr.next) {
		curr = curr.next;
	}

	curr.next = newNode;

	this._size++;
};

LinkedList.prototype.pop = function() {
	var curr = this.head;
	var toReturn;

	if (this._size === 0) {
		throw "an empty list can't pop";
	}

	while (curr.next.next) {
		curr = curr.next;
	}

	toReturn = curr.next.data;
	curr.next = null;
	this._size--;

	return toReturn;
};

LinkedList.prototype.toString = function() {
	var curr, str = '';

	if (this._size === 0) {
		return '';
	}

	curr = this.head.next;

	while (curr) {
		str += curr.data.toString() + ', ';
		curr = curr.next;
	}

	str = str.slice(0, -2); // remove trailing ', '

	return str;
};

LinkedList.prototype.unshift = function(el) {
	var newNode = new Node(el);
	var oldFirst = this.head.next;
	this.head.next = newNode;
	newNode.next = oldFirst;
	this._size++;
};

LinkedList.prototype.shift = function() {
	if (this._size === 0) {
		throw "an empty list can't shift";
	}

	var oldFirst = this.head.next;
	this.head.next = oldFirst.next;
	this._size--;
	return oldFirst.data;
};

LinkedList.prototype.read = function(index) {
	if (index > this._size) {
		return undefined;
	}

	var curr = this.head.next;
	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}
	return curr.data;
};

LinkedList.prototype.clear = function() {
	if (this._size === 0) {
		throw "an empty list can't clear";
	}

	this.head.next = null;
	this._size = 0;
};

LinkedList.prototype.indexOf = function(el) {
	var curr = this.head.next;

	for (var i = 0; i < this._size; i++) {
		if (curr.data === el) {
			return i;
		}

		curr = curr.next;
	}

	return -1;
};

LinkedList.prototype.size = function() {
	return this._size;
};

LinkedList.prototype.insert = function(el, index) {
	var newNode = new Node(el);
	var curr = this.head;
	var oldNext;

	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}

	oldNext = curr.next;
	curr.next = newNode;
	newNode.next = oldNext;

	this._size++;
};

LinkedList.prototype.remove = function(startIndex, endIndex) {
	if (this._size === 0) {
		throw "can't remove from an empty list";
	}

	if (startIndex >= this._size || endIndex >= this._size) {
		throw "can't remove an element that doesn't exist";
	}

	var curr = this.head;
	var startNode, endNode, toReturn;

	for (var i = 0; i < startIndex; i++) {
		curr = curr.next;
	}
	startNode = curr;

	if (endIndex) {
		toReturn = [];

		for (; i <= endIndex; i++) {
			curr = curr.next;
			toReturn.push(curr.data);
		}

		endNode = curr;
		startNode.next = endNode.next;
		this._size -= endIndex - startIndex + 1;
	}

	else {
		toReturn = startNode.next.data;
		startNode.next = startNode.next.next;
		this._size--;
	}

	return toReturn;
};
