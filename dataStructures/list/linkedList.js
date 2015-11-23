function Node(el) {
	this.el = el;
	this.next = null;
}

function LinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this._size = 0;
}

LinkedList.prototype.toString = function() {
	var str = '';
	var curr = this.head.next;

	while (curr) {
		str += curr.el.toString();
		curr = curr.next;
	}

	return str;
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

	var newTail = this.head;
	while (newTail.next !== this.tail) {
		newTail = newTail.next;
	}

	var toReturn = this.tail;
	newTail.next = null;
	this.tail = newTail;
	this._size--;
	return toReturn.el;
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

	if (this._size === 1) {
		this.tail = this.head;
	}

	return oldFirst.el;
};

LinkedList.prototype.read = function(index) {
	if (index < 0 || index > this._size - 1) {
		return undefined;
	}

	var curr = this.head.next;

	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}

	return curr.el;
};

LinkedList.prototype.clear = function() {
	if (this._size === 0) {
		throw "an empty list can't clear";
	}

	this.head = new Node('head');
	this.tail = this.head;
	this._size = 0;
};

LinkedList.prototype.indexOf = function(el) {
	var curr = this.head.next;
	var i = 0;

	while (curr) {
		if (curr.el === el) {
			return i;
		}

		i++;
		curr = curr.next;
	}

	return -1;
};

LinkedList.prototype.size = function() {
	return this._size;
};

LinkedList.prototype.insert = function(el, index) {
	if (index < 0 || index >= this._size) {
		throw "can't insert at an invalid index";
	}

	var newNode = new Node(el);

	var previous = this.head;
	for (var i = 0; i < index; i++) {
		previous = previous.next;
	}

	newNode.next = previous.next;
	previous.next = newNode;
	this._size++;
};

LinkedList.prototype.remove = function(start, end) {
	if (this._size === 0) {
		throw "can't remove from an empty list";
	}

	if (start < 0 || end < 0 || start >= this._size || end >= this._size) {
		throw "can't remove an element that doesn't exist";
	}

	var before, after, range, toReturn = [];
	end = end || start;

	before = this.head;
	for (var i = 0; i < start; i++) {
		before = before.next;
	}

	range = end - start + 1;
	after = before;
	for (var j = 0; j < range; j++) {
		after = after.next;
		toReturn.push(after.el);
	}
	after = after.next;
	before.next = after;

	this._size -= range;
	return toReturn;
};
