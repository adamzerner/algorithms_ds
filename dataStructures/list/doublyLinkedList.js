function Node(el) {
	this.el = el;
	this.next = null;
	this.prev = null;
}

function DoublyLinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this._size = 0;
}

DoublyLinkedList.prototype.toString = function() {
	var str = '';
	var curr = this.head.next;

	while (curr) {
		str += curr.el.toString();
		curr = curr.next;
	}

	return str;
};

DoublyLinkedList.prototype.push = function (el) {
	var newNode = new Node(el);
	var oldTail = this.tail;
	oldTail.next = newNode;
	newNode.prev = oldTail;
	this.tail = newNode;
	this._size++;
};

DoublyLinkedList.prototype.pop = function() {
	if (this._size === 0) {
		throw "an empty list can't pop";
	}

	var oldTail = this.tail;
	var newTail = this.tail.prev;
	newTail.next = null;
	this.tail = newTail;
	this._size--;
	return oldTail.el;
};

DoublyLinkedList.prototype.unshift = function(el) {
	if (this._size === 0) {
		this.push(el);
		return;
	}

	var newNode = new Node(el);
	var oldFirst = this.head.next;
	this.head.next = newNode;
	newNode.next = oldFirst;
	newNode.prev = this.head;
	oldFirst.prev = newNode;
	this._size++;
};

DoublyLinkedList.prototype.shift = function() {
	if (this._size === 0) {
		throw "an empty list can't shift";
	}

	if (this._size === 1) {
		return this.pop();
	}

	var oldFirst = this.head.next;
	var newFirst = oldFirst.next;
	this.head.next = newFirst;
	newFirst.prev = this.head;
	this._size--;
	return oldFirst.el;
};

DoublyLinkedList.prototype.read = function(index) {
	if (index < 0 || index >= this._size) {
		return undefined;
	}

	var curr = this.head.next;
	for (var i = 0; i < index; i++) {
		curr = curr.next;
	}
	return curr.el;
};

DoublyLinkedList.prototype.clear = function() {
	if (this._size === 0) {
		throw "an empty list can't clear";
	}

	this.head = new Node('head');
	this.tail = this.head;
	this._size = 0;
};

DoublyLinkedList.prototype.indexOf = function(el) {
 var curr = this.head.next;
 var index = 0;
 while (curr) {
	 if (curr.el === el) {
		 return index;
	 }

	 curr = curr.next;
	 index++;
 }

 return -1;
};

DoublyLinkedList.prototype.size = function() {
	return this._size;
};

DoublyLinkedList.prototype.insert = function(el, index) {
	if (index < 0 || index >= this._size) {
		throw "can't insert at an invalid index";
	}

	var newNode = new Node(el);
	var prev = this.head, after;
	for (var i = 0; i < index; i++) {
		prev = prev.next;
	}

	after = prev.next;
	prev.next = newNode;
	newNode.prev = prev;
	newNode.next = after;
	after.prev = newNode;

	this._size++;
};

DoublyLinkedList.prototype.remove = function(start, end) {
	if (this._size === 0) {
		throw "can't remove from an empty list";
	}

	if (start < 0 || end < 0 || start >= this._size || end >= this._size) {
		throw "can't remove an element that doesn't exist";
	}

	end = end || start;
	var prev = this.head, after, range, toReturn = [];
	for (var i = 0; i < start; i++) {
		prev = prev.next;
	}

	range = end - start + 1;
	after = prev.next;

	for (var j = 0; j < range; j++) {
		toReturn.push(after.el);
		after = after.next;
	}

	prev.next = after;
	if (after !== null) {
		after.prev = prev;
	}

	this._size -= range;
	return toReturn;
};
