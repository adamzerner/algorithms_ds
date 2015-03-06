function Node(val) {
	this.val = val;
	this.prev = null;
	this.next = null;
}

function LinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this.size = 0;
}
LinkedList.prototype._isEmpty = function() {
	return this.size === 0;
};
LinkedList.prototype.push = function(val) {
	var n = new Node(val);
	this.tail.next = n;
	this.tail = n;
	this.size++;
};
LinkedList.prototype.pop = function() {
	if (this._isEmpty()) throw "can't pop from an empty linked list";
	else if (this.size === 1) {
		var toRet = this.tail.val;
		this.tail = this.head;
		this.size--;
		return toRet;
	} else {
		var curr = this.head.next;
		while (curr.next.next) {
			curr = curr.next;
		}
		var toRet = curr.next.val;
		curr.next = null;
		this.tail = curr;
		this.size--;
		return toRet;
	}
};
LinkedList.prototype.unshift = function(val) {
	var n = new Node(val);
	if (this._isEmpty()) {
		this.head.next = n;
		this.tail = n;
	} else {
		var oldFirst = this.head.next;
		this.head.next = n;
		n.next = oldFirst;
	}
	this.size++;
};
LinkedList.prototype.shift = function() {
	if (this._isEmpty()) throw "can't shift from an empty linked list";
	else if (this.size === 1) {
		var toRet = this.tail.val;
		this.tail = this.head;
		this.size--;
		return toRet;
	} else {
		var oldFirst = this.head.next;
		this.head.next = oldFirst.next;
		this.size--;
		return oldFirst.val;
	}
};
LinkedList.prototype.clear = function() {
	this.tail = this.head;
	this.size = 0;
};
LinkedList.prototype.find = function(val) {
	if (this._isEmpty()) return false;
	var curr = this.head.next;
	while (curr) {
		if (curr.val === val) return curr;
		curr = curr.next;
	}
	return false;
};
LinkedList.prototype.findPrevious = function(val) {
	if (this._isEmpty()) return false;
	var curr = this.head;
	while (curr.next) {
		if (curr.next.val === val) return curr;
		curr = curr.next;
	}
	return false;
};
LinkedList.prototype.insert = function(el, prevVal) {
	var n = new Node(el);
	var prevEl = this.find(prevVal);
	if (prevEl.next) {
		var temp = prevEl.next;
		prevEl.next = n;
		n.next = temp;
		this.size++;
	} else {
		this.push(el);
	}
};
LinkedList.prototype.removeEl = function(el) {
	var prev = this.findPrevious(el);
	if (!prev) return false;
	var el = prev.next;
	var next = el.next;
	prev.next = next;
	this.size--;
	if (next === null) this.tail = prev;
};
LinkedList.prototype.splice = function(start, num) {
	if (this._isEmpty()) return false;
	var prev = this.findPrevious(start);
	var curr = prev.next;
	var retArr = [];
	for (var i = 0; i < num; i++) {
		retArr.push(curr.val);
		curr = curr.next;
	}
	prev.next = curr;
	if (curr === null) this.tail = prev;
	this.size -= num;
	return retArr;
};
LinkedList.prototype.toString = function() {
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