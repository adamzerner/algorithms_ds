function Node(el) {
	this.data = el;
	this.next = null;
	this.prev = null;
}

function DoublyLinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this._size = 0;
}

DoublyLinkedList.prototype.toString = function() {
	if (this._size === 0) {
		return '';
	}

	var curr = this.head.next;
	var str = '';

	while (curr) {
		str += curr.data.toString() + ', ';
		curr = curr.next;
	}

	return str.slice(0, -2); // to remove the trailing ', '
};

DoublyLinkedList.prototype.push = function(el) {
	var newNode = new Node(el);
	this.tail.next = newNode;
	newNode.prev = this.tail;
	this.tail = newNode;
	this._size++;
};

DoublyLinkedList.prototype.pop = function() {
	if (this._size === 0) {
		throw "an empty list can't pop";
	}

	var oldTail = this.tail;
	var newTail = oldTail.prev;
	newTail.next = null;

	this._size--;
	return oldTail.data;
};

DoublyLinkedList.prototype.unshift = function(el) {
	var newNode = new Node(el);
	var oldFirst = this.head.next;
	this.head.next = newNode;
	newNode.next = oldFirst;
	newNode.prev = this.head;

	if (oldFirst) {
		oldFirst.prev = newNode;
	}

	this._size++;
};

DoublyLinkedList.prototype.shift = function() {
	if (this._size === 0) {
		throw "an empty list can't shift";
	}

	var oldFirst = this.head.next;
	var newFirst = oldFirst.next;
	this.head.next = newFirst;

	if (this._size === 1) {
		this.tail = this.head;
	}
	else {
		newFirst.prev = this.head;
	}

	this._size--;
	return oldFirst.data;
};

DoublyLinkedList.prototype.read = function(index) {
	if (index >= this._size) {
		return undefined;
	}

	var curr = this.head.next;

	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}

	return curr.data;
};

DoublyLinkedList.prototype.clear = function() {
	if (this._size === 0) {
		throw "an empty list can't clear";
	}

	this.head.next = null;
	this.tail = this.head;
	this._size = 0;
};

DoublyLinkedList.prototype.indexOf = function(el) {
	var index = 0;
	var curr = this.head.next;

	while (curr) {
		if (curr.data === el) {
			return index;
		}

		index++;
		curr = curr.next;
	}

	return -1;
};


DoublyLinkedList.prototype.size = function() {
	return this._size;
};

DoublyLinkedList.prototype.insert = function(el, index) {
	if (index > this._size) {
		throw "can't insert at an invalid index";
	}

	var newNode = new Node(el);
	var previous = this._findPrevious(index);
	var oldNext = previous.next;
	previous.next = newNode;
	newNode.next = oldNext;
	newNode.prev = previous;

	if (oldNext) {
		oldNext.prev = newNode;
	}
	else {
		this.tail = newNode;
	}

	this._size++;
};

DoublyLinkedList.prototype.remove = function(start, end) {
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
	if (after) {
		after.previous = previous;
	}

	if (end === this._size - 1) {
		this.tail = previous;
	}

	this._size -= range;

	if (toReturn.length === 1) {
		toReturn = toReturn[0];
	}
	return toReturn;
};

DoublyLinkedList.prototype._findPrevious = function(index) {
	var curr = this.head;

	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}

	return curr;
};
