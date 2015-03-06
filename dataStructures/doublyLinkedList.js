function Node(val) {
	this.val = val;
	this.prev = null;
	this.next = null;
}

function DoublyLinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this.size = 0;
}
DoublyLinkedList.prototype._isEmpty = function() {
	return this.size === 0;
};
DoublyLinkedList.prototype.push = function(el) {
	var n = new Node(el);
	var prev = this.tail;
	prev.next = n;
	n.prev = prev;
	this.tail = n;
	this.size++;
};
DoublyLinkedList.prototype.pop = function() {
	if (this._isEmpty()) throw "can't pop from an empty doubly linked list";
	var oldTail = this.tail;
	var newTail = oldTail.prev;
	newTail.next = null;
	oldTail.prev = null;
	this.tail = newTail;
	this.size--;
	return oldTail.val;
};
DoublyLinkedList.prototype.unshift = function(el) {
	var n = new Node(el);
	if (this._isEmpty()) {
		this.push(el);
	} else {
		var oldFirst = this.head.next;
		this.head.next = n;
		n.next = oldFirst;
		oldFirst.prev = n;
		n.prev = this.head;
		this.size++;
	}
};
DoublyLinkedList.prototype.shift = function() {
	if (this._isEmpty()) throw "can't shift from an empty doubly linked list";
	else if (this.size === 1) {
		return this.pop();
	} else {
		var oldFirst = this.head.next;
		var newFirst = oldFirst.next;
		this.head.next = newFirst;
		newFirst.prev = this.head;
		this.size--;
		return oldFirst.val;
	}
};
DoublyLinkedList.prototype.clear = function() {
	this.tail = this.head;
	this.size = 0;
};
DoublyLinkedList.prototype.find = function(el) {
	if (this._isEmpty()) return false;
	var curr = this.head.next;
	while (curr) {
		if (curr.val === el) return curr;
		curr = curr.next;
	}
	return false;
};
DoublyLinkedList.prototype.insert = function(el, prev) {
	var n = new Node(el);
	prev = this.find(prev);
	if (!prev) throw "can't find " + prev.val;
	var next = prev.next;
	if (next === null) {
		this.push(el);
	} else {
		prev.next = n;
		n.next = next;
		next.prev = n;
		n.prev = prev;
		this.size++;
	}
};
DoublyLinkedList.prototype.removeEl = function(val) {
	var el = this.find(val);
	var prev = el.prev;
	var next = el.next;
	if (next === null) {
		this.pop();
	} else {
		prev.next = next;
		next.prev = prev;
		this.size--;
	}
};
DoublyLinkedList.prototype.splice = function(prevVal, num) {
	prev = this.find(prevVal).prev;
	var curr = prev.next;
	var retArr = [];
	for (var i = 0; i < num; i++) {
		retArr.push(curr.val);
		curr = curr.next;
	}
	if (curr === null) this.tail = prev;
	else curr.prev = prev;
	prev.next = curr;
	this.size -= num;
	return retArr;
};
DoublyLinkedList.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var curr = this.head.next;
	var retStr = '';
	while (curr.next) {
		retStr += curr.val + ', ';
		curr = curr.next;
	}
	retStr += curr.val;
	return retStr;
};