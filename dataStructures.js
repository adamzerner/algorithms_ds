function Stack() {
	this.data = new Array(5);
	this.top = -1;
}
Stack.prototype._isEmpty = function() {
	return this.top === -1;
};
Stack.prototype._resize = function(size) {
	var temp = new Array(size);
	for (var i = 0, len = size; i < len; i++) {
		temp[i] = this.data[i];
	}
	this.data = temp;
};
Stack.prototype.push = function(el) {
	this.top++;
	if (this.top === this.data.length) {
		this._resize(2*this.data.length);
	}
	this.data[this.top] = el;
};
Stack.prototype.pop = function() {
	if (this._isEmpty()) throw "an empty stack can't pop";
	var oldTop = this.data[this.top];
	this.data[this.top] = null;
	this.top--;
	if (this.top > 0 && this.top <= this.data.length/4) {
		this._resize(this.data.length/2);
	}
	return oldTop;
};
Stack.prototype.size = function() {
	return this.top + 1;
};
Stack.prototype.peek = function() {
	return this.data[this.top];
};
Stack.prototype.clear = function() {
	this.data = {};
	this.top = -1;
};
Stack.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	for (var i = 0; i < this.top; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};

function Queue() {
	this.data = {};
	this.head = null;
	this.tail = null;
}
Queue.prototype._isEmpty = function() {
	return this.head === null;
};
Queue.prototype.size = function() {
	if (this._isEmpty()) return 0;
	return this.tail - this.head + 1;
};
Queue.prototype.enqueue = function(el) {
	if (this._isEmpty()) {
		this.head = 0;
		this.tail = 0;
		this.data[0] = el;
	}
	else {
		this.head--;
		this.data[this.head] = el;
	}
};
Queue.prototype.dequeue = function() {
	if (this._isEmpty()) throw "an empty queue can't dequeue";
	else if (this.size() === 1) {
		var toRet = this.data[this.head];
		this.head = null;
		this.tail = null;
		this.data = {};
		return toRet;
	}
	else {
		var toRet = this.data[this.head];
		this.head++;
		return toRet;
	}
};
Queue.prototype.peek = function() {
	return this.data[this.head];
};
Queue.prototype.clear = function() {
	this.data = {};
	this.head = null;
	this.tail = null;
};
Queue.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	for (var i = this.head; i <= this.tail-1; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};

function List() {
	this.data = {};
	this.head = null;
	this.tail = null;
}
List.prototype._isEmpty = function() {
	return this.head === null;
};
List.prototype.size = function() {
	if (this._isEmpty()) return 0;
	return this.tail - this.head + 1;
};
List.prototype.push = function(el) {
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else {
		this.tail++;
		this.data[this.tail] = el;
	}
};
List.prototype.pop = function() {
	if (this._isEmpty()) throw "an empty list can't pop";
	else if (this.size() === 1) {
		var toRet = this.data[this.tail];
		this.data = {};
		this.head = null;
		this.tail = null;
		return toRet;
	}
	else {
		var toRet = this.data[this.tail];
		this.tail--;
		return toRet;
	}
};
List.prototype.unshift = function(el) {
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else {
		this.head--;
		this.data[this.head] = el;
	}
};
List.prototype.shift = function() {
	if (this._isEmpty()) throw "an empty list can't shift";
	else if (this.size() === 1) {
		var toRet = this.data[this.head];
		this.data = {};
		this.head = null;
		this.tail = null;
		return toRet;
	}
	else {
		var toRet = this.data[this.head];
		this.head++;
		return toRet;
	}
};
List.prototype.clear = function() {
	this.data = {};
	this.head = null;
	this.tail = null;
};
List.prototype.indexOf = function(el) {
	for (var i = this.head; i <= this.tail; i++) {
		if (this.data[i] === el) return i - this.head;
	}
	return -1;
};
List.prototype.insert = function(el, pos) {
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else {
		pos += this.head;
		var mid = (this.head+this.tail)/2;
		if (pos < mid) {
			for (var i = this.head; i <= pos-1; i++) {
				this.data[i-1] = this.data[i];
			}
			this.data[pos-1] = el;
			this.head--;
		}
		else if (pos >= mid) {
			for (var i = this.tail; i >= pos; i--) {
				this.data[i+1] = this.data[i];
			}
			this.data[pos] = el;
			this.tail++;
		}
	}
};
List.prototype.removeIndex = function(index) {
	index += this.head;
	if (index < this.head || index > this.tail) throw "can't removeIndex";
	var mid = (this.head+this.tail)/2;
	if (index < mid) {
		for (var i = index; i >= this.head+1; i--) {
			this.data[i] = this.data[i-1];
		}
		this.head++;
	}
	else if (index >= mid) {
		for (var i = index; i <= this.tail-1; i++) {
			this.data[i] = this.data[i+1];
		}
		this.tail--;
	}
};
List.prototype.removeEl = function(el) {
	if (this._isEmpty()) throw "can't removeEl";
	var index = this.indexOf(el);
	if (index === -1) throw "can't removeEl";
	this.removeIndex(index);
};
List.prototype.splice = function(start, num) {
	start += this.head;
	var retArr = [];
	for (var i = start; i < start+num; i++) {
		retArr.push(this.data[i]);
	}
	for (var i = start+num; i <= this.tail; i++) {
		this.data[i-num] = this.data[i];
	}
	this.tail -= num;
	return retArr;
};
List.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	for (var i = this.head; i <= this.tail-1; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};

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
	}
	else {
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
	}
	else {
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
	}
	else {
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
	}
	else {
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
	}
	else {
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
	}
	else {
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
	}
	else {
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
	}
	else {
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

function BSTNode(val) {
	this.val = val;
	this.left = null;
	this.right = null;
}
function BST() {
	this.root = null;
}
BST.prototype._isEmpty = function() {
	return this.root === null;
};
BST.prototype.insert = function(val, root) {
	var n = new BSTNode(val);
	if (this._isEmpty()) this.root = n;
	else {
		root = root || this.root;
		if (val < root.val) {
			if (!root.left) root.left = n;
			else this.insert(val, root.left);
		}
		else {
			if (!root.right) root.right = n;
			else this.insert(val, root.right);
		}
	}
};
BST.prototype.preorder = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	function inner(curr) {
		retStr += curr.val;
		if (curr.left) inner(curr.left);
		if (curr.right) inner(curr.right);
	}
	inner(this.root);
	return retStr;
};
BST.prototype.inorder = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	function inner(curr) {
		if (curr.left) inner(curr.left);
		retStr += curr.val;
		if (curr.right) inner(curr.right);
	}
	inner(this.root);
	return retStr;
};
BST.prototype.postorder = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	function inner(curr) {
		if (curr.left) inner(curr.left);
		if (curr.right) inner(curr.right);
		retStr += curr.val;
	}
	inner(this.root);
	return retStr;
};
BST.prototype.levelorder = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	var queue = [];
	queue.push(this.root);
	var curr;
	while (queue.length > 0) {
		curr = queue.shift();
		retStr += curr.val;
		if (curr.left) queue.push(curr.left);
		if (curr.right) queue.push(curr.right);
	}
	return retStr;
};
BST.prototype.min = function() {
	if (this._isEmpty()) throw "an empty tree has no min";
	var curr = this.root;
	while (curr.left) {
		curr = curr.left;
	}
	return curr;
};
BST.prototype.max = function() {
	if (this._isEmpty()) throw "an empty tree has no max";
	var curr = this.root;
	while (curr.right) {
		curr = curr.right;
	}
	return curr;
};
BST.prototype.find = function(val) {
	if (this._isEmpty()) throw "an empty tree can't find";
	var curr = this.root;
	while (curr) {
		if (val === curr.val) return curr;
		else if (val < curr.val) curr = curr.left;
		else if (val > curr.val) curr = curr.right;
	}
	return -1;
};
BST.prototype.findParent = function(val) {
	if (this._isEmpty()) return false;
	var curr = this.root;
	if (curr.val === val) return false;
	while (curr.left || curr.right) {
		if (curr.left.val === val || curr.right.val === val)
			return curr;
		else if (val < curr.val) curr = curr.left;
		else if (val > curr.val) curr = curr.right;
	}
	return false;
};
BST.prototype.remove = function(val) {
	if (this._isEmpty()) throw "an empty tree can't remove";
	var parent = this.findParent(val);
	if (!parent) throw "can't remove nonexistant element";
	var el, parentDir;
	if (parent.left.val === val) {
		el = parent.left;
		parentDir = 'left';
	}
	else {
		el = parent.right;
		parentDir = 'right';
	}

	if (!el.left && !el.right) { // leaf
		parent[parentDir] = null;
	}
	else if (el.left && el.right) { // two children
		// get smallest of right subtree
		var min = el.right;
		var minParent = el;
		minParentDir = 'right';
		while (min.left) {
			minParent = min;
			min = min.left;
			minParentDir = 'left';
		}
		// replace el
		el.val = min.val;
		// remove min
		minParent[minParentDir] = min.right;
	}
	else { // one child
		var child;
		if (el.left) child = el.left;
		else child = el.right;
		parent[parentDir] = child;
	}
};

function Hash() {
	this.arr = [];
}
Hash.prototype._hash = function(key) {
	return key.charCodeAt(0) - 96;
};
Hash.prototype.get = function(key) {
	var index = this._hash(key);
	var linkedlist = this.arr[index];
	if (!linkedlist) return undefined;
	else {
		var curr = linkedlist.head.next;
		while (curr) {
			if (curr.val.key === key) return curr.val.val;
			curr = curr.next;
		}
	}
	return undefined;
};
Hash.prototype.set = function(key, val) {
	var index = this._hash(key);
	if (!this.arr[index]) this.arr[index] = new LinkedList();
	var linkedlist = this.arr[index];
	if (linkedlist._isEmpty()) linkedlist.push({key: key, val: val});
	else {
		var curr = linkedlist.head.next;
		while (curr) {
			if (curr.val.key === key) {
				curr.val.val = val;
				return;
			}
			curr = curr.next;
		}
		linkedlist.push({key: key, val: val});
	}
};