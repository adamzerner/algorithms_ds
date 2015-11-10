function Node(el) {
	this.data = el;
	this.next = null;
}

function LinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this._size = 0;
}

LinkedList.prototype.toString = function() {
	if (this._size === 0) {
		return '';
	}

	var str = '';
	var curr = this.head.next;

	while (curr) {
		str += curr.data.toString() + ', ';
		curr = curr.next;
	}

	return str.slice(0, -2); // to get rid of the trailing ', '
};

LinkedList.prototype.push = function(el) {
	var newNode = new Node(el);
	this.tail.next = newNode;
	this.tail = newNode;
	this._size++;
};

LinkedList.prototype.pop = function() {
	if (this._size === 0) {
		throw "an empty list can't pop";
	}

	var oldTail;
	var curr = this.head;

	while (curr.next.next) {
		curr = curr.next;
	}

	oldTail = curr.next;
	curr.next = null;
	this.tail = curr;
	this._size--;

	return oldTail.data;
};

LinkedList.prototype.unshift = function(el) {
	var newNode = new Node(el);
	var oldFirst = this.head.next;
	this.head.next = newNode;
	newNode.next = oldFirst;

	if (oldFirst === null) {
		this.tail = newNode;
	}

	this._size++;
};

LinkedList.prototype.shift = function() {
	if (this._size === 0) {
		throw "an empty list can't shift";
	}

	var oldFirst = this.head.next;
	this.head.next = oldFirst.next;

	if (this._size === 1) {
		this.tail = this.head;
	}

	this._size--;
	return oldFirst.data;
};

LinkedList.prototype.read = function(index) {
	if (index >= this._size) {
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
	this.tail = this.head;
	this._size = 0;
};

LinkedList.prototype.indexOf = function(el) {
	var curr = this.head;
	var index = -1;

	while (curr.next) {
		curr = curr.next;
		index++;

		if (curr.data === el) {
			break;
		}
	}

	return index;
};

LinkedList.prototype.size = function() {
	return this._size;
};

LinkedList.prototype.insert = function(el, index) {
	if (index > this._size) {
		throw "can't insert at an invalid index";
	}

	var newNode = new Node(el);
	var previous = this._findPrevious(index);
	var oldNext = previous.next;
	previous.next = newNode;
	newNode.next = oldNext;

	if (oldNext === null) {
		this.tail = newNode;
	}

	this._size++;
};

LinkedList.prototype.remove = function(start, end) {
	if (this._size === 0) {
		throw "can't remove from an empty list";
	}

	if (start >= this._size || end >= this._size) {
		throw "can't remove an element that doesn't exist";
	}

	var previous = this._findPrevious(start);
	var after = previous;
	var range = end ? end - start + 1 : 1;
	var toReturn = [];

	for (var i = 0; i < range; i++) {
		after = after.next;
		toReturn.push(after.data);
	}
	after = after.next;

	previous.next = after;

	if (end === this._size - 1) {
		this.tail = previous;
	}

	this._size -= range;

	if (toReturn.length === 1) {
		return toReturn[0];
	}
	return toReturn;
};

LinkedList.prototype._findPrevious = function(index) {
	var curr = this.head;

	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}

	return curr;
};

LinkedList.prototype._findByKey = function(key) {
	var curr = this.head.next;

	while (curr) {
		if (curr.data.key === key) {
			return curr.data;
		}
		curr = curr.next;
	}

	return {};
};

LinkedList.prototype._removeByKey = function(key) {
	var el = this._findByKey(key);
	var index = this.indexOf(el);
	this.remove(index);
};
