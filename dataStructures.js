// function Stack() {
// 	this.data = [];
// }
// Stack.prototype._isEmpty = function() {
// 	if (this.data.length === 0) {
// 		return true;
// 	}
// 	return false;
// };
// Stack.prototype.push = function(el) {
// 	var len = this.data.length;
// 	this.data[len] = el;
// };
// Stack.prototype.pop = function() {
// 	if (this._isEmpty()) throw "an empty stack can't pop";
// 	var len = this.data.length;
// 	var toRet = this.data[len-1];
// 	this.data.splice(len-1, 1);
// 	return toRet;
// };
// Stack.prototype.size = function() {
// 	return this.data.length;
// };
// Stack.prototype.peek = function() {
// 	return this.data[this.data.length-1];
// };
// Stack.prototype.clear = function() {
// 	this.data = [];
// };
// Stack.prototype.toString = function() {
// 	var retStr = '';
// 	if (this.size() > 0) {
// 		for (var i = 0, len = this.data.length; i <= len-2; i++) {
// 			retStr += this.data[i] + ', ';
// 		}
// 		retStr += this.data[i];
// 	}
// 	return retStr;
// };

// function Queue() {
// 	this.data = {};
// 	this.head = null;
// 	this.tail = null;
// }
// Queue.prototype._isEmpty = function() {
// 	if (this.head === null) return true;
// 	return false;
// };
// Queue.prototype.enqueue = function(el) {
// 	if (this._isEmpty()) {
// 		this.head = 0;
// 		this.tail = 0;
// 		this.data[0] = el;
// 	}
// 	else {
// 		this.head--;
// 		this.data[this.head] = el;
// 	}
// };
// Queue.prototype.dequeue = function() {
// 	if (this._isEmpty()) throw "an empty queue can't dequeue";
// 	else if (this.size() === 1) {
// 		var toRet = this.data[this.head];
// 		this.data = {};
// 		this.head = null;
// 		this.tail = null;
// 	}
// 	else {
// 		var toRet = this.data[this.head];
// 		delete this.data[this.head];
// 		this.head++;
// 	}
// 	return toRet;
// };
// Queue.prototype.size = function() {
// 	if (this._isEmpty()) return 0;
// 	else {
// 		return this.tail - this.head + 1;
// 	}
// };
// Queue.prototype.peek = function() {
// 	return this.data[this.head];
// };
// Queue.prototype.clear = function() {
// 	this.data = {};
// 	this.head = null;
// 	this.tail = null;
// };
// Queue.prototype.toString = function() {
// 	var retStr = '';
// 	if (!this._isEmpty()) {
// 		for (var i = this.head; i <= this.tail-1; i++) {
// 			retStr += this.data[i] + ', ';
// 		}
// 		retStr += this.data[i];
// 	}
// 	return retStr;
// }

// function List() {
// 	this.data = {};
// 	this.head = null;
// 	this.tail = null;
// }
// List.prototype._isEmpty = function() {
// 	if (this.head === null) return true;
// 	return false;
// };
// List.prototype.push = function(el) {
// 	if (this._isEmpty()) {
// 		this.head = 0;
// 		this.tail = 0;
// 		this.data[0] = el;
// 	}
// 	else {
// 		this.tail++;
// 		this.data[this.tail] = el;
// 	}
// };
// List.prototype.pop = function() {
// 	if (this._isEmpty()) {
// 		throw "an empty list can't pop";
// 	}
// 	else {
// 		var toRet = this.data[this.tail];
// 		delete this.data[this.tail];
// 		this.tail--;
// 		return toRet;
// 	}
// };
// List.prototype.unshift = function(el) {
// 	if (this._isEmpty()) {
// 		this.head = 0;
// 		this.tail = 0;
// 		this.data[0] = el;
// 	}
// 	else {
// 		this.head--;
// 		this.data[this.head] = el;
// 	}
// };
// List.prototype.shift = function() {
// 	if (this._isEmpty()) {
// 		throw "an empty list can't shift";
// 	}
// 	else {
// 		var toRet = this.data[this.head];
// 		delete this.data[this.head];
// 		this.head++;
// 		return toRet;
// 	}
// };
// List.prototype.clear = function() {
// 	this.data = {};
// 	this.head = null;
// 	this.tail = null;
// };
// List.prototype.size = function() {
// 	if (this._isEmpty()) {
// 		return 0;
// 	}
// 	else {
// 		return this.tail - this.head + 1;
// 	}
// };
// List.prototype.indexOf = function(el) {
// 	var index;
// 	for (var i = this.head; i <= this.tail; i++) {
// 		if (this.data[i] === el) {
// 			index = i;
// 			break;
// 		}
// 	}
// 	if (typeof index === 'undefined') 
// 		return -1;
// 	else
// 		return index - this.head;
// };
// List.prototype.insert = function(el, pos) {
// 	if (this._isEmpty()) {
// 		this.head = 0;
// 		this.tail = 0;
// 		this.data[0] = el;
// 		return;
// 	}

// 	pos += this.head;
// 	var frontHalfSize = Math.abs(this.tail - pos);
// 	var backHalfSize = Math.abs(pos - this.head);
// 	if (frontHalfSize > backHalfSize) {
// 		for (var i = this.tail+1; i >= pos+1; i--) {
// 			this.data[i] = this.data[i-1];
// 		}
// 		this.data[pos] = el;
// 		this.tail++;
// 	}
// 	else {
// 		for (var i = this.head-1; i <= pos-2 ; i++) {
// 			this.data[i] = this.data[i+1];
// 		}
// 		this.data[pos-1] = el;
// 		this.head--;
// 	}
// };
// List.prototype.removeEl = function(el) {
// 	for (var i = this.head; i <= this.tail; i++) {
// 		if (this.data[i] === el) {
// 			i -= this.head; // removeIndex() has to be called with a zero-based index
// 			return this.removeIndex(i);
// 		}
// 	}
// 	throw "can't removeEl";
// };
// List.prototype.removeIndex = function(index) {
// 	index += this.head;
// 	if (index < this.head || index > this.tail) throw "can't removeIndex"; // invalid input
// 	var frontHalfSize = Math.abs(this.tail - index);
// 	var backHalfSize = Math.abs(index - this.head);
// 	var toRet = this.data[index];
// 	if (frontHalfSize > backHalfSize) {
// 		for (var i = index; i >= this.head+1; i--) {
// 			this.data[i] = this.data[i-1];
// 		}
// 		delete this.data[this.head];
// 		this.head++;
// 	}
// 	else {
// 		for (var i = index; i <= this.tail-1; i++) {
// 			this.data[i] = this.data[i+1];
// 		}
// 		delete this.data[this.tail];
// 		this.tail--;
// 	}
// 	return toRet;
// };
// List.prototype.splice = function(start, num) {
// 	start += this.head;
// 	var retArr = [];
// 	for (var i = start; i < start+num; i++) {
// 		retArr.push(this.data[i]);
// 		delete this.data[i];
// 	}
// 	// I didn't feel like doing topHalf vs. bottomHalf
// 	for (var i = start+num; i <= this.tail; i++) {
// 		this.data[i-num] = this.data[i];
// 		delete this.data[i];
// 	}
// 	this.tail -= num;
// 	return retArr;
// };
// List.prototype.toString = function() {
// 	if (this._isEmpty()) return '';
// 	else {
// 		var retStr = '';
// 		for (var i = this.head; i <= this.tail-1; i++) {
// 			retStr += this.data[i] + ', ';
// 		}
// 		retStr += this.data[i];
// 		return retStr;
// 	}
// };

// function Node(el) {
// 	this.val = el;
// 	this.next = null;
// 	this.prev = null;
// }

// function LinkedList() {
// 	this.head = new Node('head');
// 	this.tail = this.head
// 	this.size = 0;
// }
// LinkedList.prototype._isEmpty = function() {
// 	if (this.size === 0) return true;
// 	return false;
// };
// LinkedList.prototype.push = function(el) {
// 	var n = new Node(el);
// 	this.tail.next = n;
// 	this.tail = n;
// 	this.size++;
// };
// LinkedList.prototype.find = function(el) {
// 	var curr = this.head.next;
// 	while (curr) {
// 		if (curr.val === el) {
// 			return curr;
// 		}
// 		curr = curr.next;
// 	}
// 	return -1;
// };
// LinkedList.prototype.findPrevious = function(el) {
// 	var curr = this.head;
// 	while (curr.next) {
// 		if (curr.next.val === el) {
// 			return curr;
// 		}
// 		curr = curr.next;
// 	}
// 	return -1;
// };
// LinkedList.prototype.pop = function() {
// 	if (this._isEmpty()) throw "can't pop from an empty linked list";
// 	var prev = this.findPrevious(this.tail.val);
// 	var toRet = prev.next.val;
// 	prev.next = null;
// 	this.size--;
// 	return toRet;
// };
// LinkedList.prototype.unshift = function(el) {
// 	var n = new Node(el);
// 	if (this.head.next === null) {
// 		this.head.next = n;
// 		this.tail = n;
// 	}
// 	else {
// 		n.next = this.head.next;
// 		this.head.next = n;
// 	}
// 	this.size++;
// };
// LinkedList.prototype.shift = function() {
// 	if (this._isEmpty()) { // empty
// 		throw "can't shift from an empty linked list";
// 	}
// 	else if (this.size === 1) { // one element
// 		var toRet = this.head.next;
// 		this.head.next = null;
// 		this.tail = this.head;
// 	}
// 	else { // two or more elements
// 		var first = toRet = this.head.next;
// 		var second = first.next;
// 		this.head.next = second;
// 	}
// 	this.size--;
// 	return toRet.val;
// };
// LinkedList.prototype.clear = function() {
// 	this.head = new Node('head');
// 	this.size = 0;
// 	this.tail = this.head;
// };
// LinkedList.prototype.insert = function(el, prevVal) {
// 	var n = new Node(el);
// 	var prev = this.find(prevVal);
// 	var next = prev.next;
// 	prev.next = n;
// 	n.next = next;
// 	this.size++;
// 	if (next === null) {
// 		this.tail = n;
// 	}
// };
// LinkedList.prototype.removeEl = function(el) {
// 	var prev = this.findPrevious(el);
// 	var elNode = prev.next;
// 	var next = elNode.next;
// 	prev.next = next;
// 	this.size--;
// 	if (next === null) this.tail = prev;
// 	else { this.tail = next; }
// };
// LinkedList.prototype.splice = function(el, num) {
// 	var prev = this.findPrevious(el);
// 	var retArr = [];
// 	for (var i = 0; i < num; i++) {
// 		retArr.push(prev.next.val);
// 		prev.next = prev.next.next;
// 	}
// 	this.size -= num;
// 	// handle this.tail;
// 	return retArr;
// };
// LinkedList.prototype.toString = function() {
// 	var curr = this.head.next;
// 	var retStr = '';
// 	if (!this._isEmpty()) {
// 		while (curr && curr.next) {
// 			retStr += curr.val + ', ';
// 			curr = curr.next;
// 		}
// 		retStr += curr.val;
// 	}
// 	return retStr;
// };

// function DoublyLinkedList() {
// 	this.head = new Node('head');
// 	this.tail = this.head;
// 	this.size = 0;
// }
// DoublyLinkedList.prototype._isEmpty = function() {
// 	if (this.size === 0) return true;
// 	else return false;
// };
// DoublyLinkedList.prototype.push = function(el) {
// 	var n = new Node(el);
// 	if (this._isEmpty()) {
// 		this.head.next = n;
// 		n.prev = this.head;
// 		this.tail = n;
// 	}
// 	else {
// 		var oldTail = this.tail;
// 		oldTail.next = n;
// 		n.prev = oldTail;
// 		this.tail = n;
// 	}
// 	this.size++;
// };
// DoublyLinkedList.prototype.pop = function() {
// 	if (this._isEmpty()) throw "can't pop from an empty doubly linked list";
// 	else if (this.size === 1) {
// 		var oldTail = this.tail;
// 		this.head.next = null;
// 		this.tail = this.head;
// 	}
// 	else {
// 		var oldTail = this.tail;
// 		var prev = this.tail.prev;
// 		prev.next = null;
// 		this.tail = prev;
// 	}
// 	this.size--;
// 	return oldTail.val;
// };
// DoublyLinkedList.prototype.unshift = function(el) {
// 	var n = new Node(el);
// 	if (this._isEmpty()) {
// 		this.head.next = n;
// 		n.prev = this.head;
// 		this.tail = n;
// 	}
// 	else {
// 		var oldFirst = this.head.next;
// 		this.head.next = n;
// 		oldFirst.prev = n;
// 		n.prev = this.head;
// 		n.next = oldFirst;
// 	}
// 	this.size++;
// };
// DoublyLinkedList.prototype.shift = function() {
// 	if (this._isEmpty()) throw "can't shift from an empty doubly linked list";
// 	else if (this.size === 1) {
// 		var oldFirst = this.head.next;
// 		this.head.next = null;
// 		this.tail = this.head;
// 	}
// 	else {
// 		var oldFirst = this.head.next;
// 		var newFirst = oldFirst.next;
// 		this.head.next = newFirst;
// 		newFirst.prev = this.head;
// 	}
// 	this.size--;
// 	return oldFirst.val;
// };
// DoublyLinkedList.prototype.clear = function() {
// 	this.head = new Node('head');
// 	this.tail = this.head;
// 	this.size = 0;
// };
// DoublyLinkedList.prototype.find = function(el) {
// 	var curr = this.head;
// 	while (curr) {
// 		if (curr.val === el) {
// 			return curr;
// 		}
// 		curr = curr.next;
// 	}
// 	return -1;
// };
// DoublyLinkedList.prototype.insert = function(el, prevVal) {
// 	var n = new Node(el);
// 	var prev = this.find(prevVal);
// 	if (prev.next === null) { // insert at end
// 		prev.next = n;
// 		n.prev = prev;
// 		this.tail = n;
// 	}
// 	else {
// 		var next = prev.next;
// 		prev.next = n;
// 		next.prev = n;
// 		n.prev = prev;
// 		n.next = next;
// 	}
// 	this.size++;
// };
// DoublyLinkedList.prototype.removeEl = function(val) {
// 	var el = this.find(val);
// 	var prev = el.prev;
// 	if (el.next === null) { // last element
// 		prev.next = null;
// 		this.tail = prev;
// 	}
// 	else {
// 		var next = el.next;
// 		prev.next = next;
// 		next.prev = prev;
// 	}
// 	this.size--;
// };
// DoublyLinkedList.prototype.splice = function(val, num) {
// 	var el = this.find(val);
// 	var prev = el.prev;
// 	var curr = el;
// 	var retArr = [];
// 	for (var i = 0; i < num; i++) {
// 		retArr.push(curr.val);
// 		curr = curr.next;
// 	}
// 	prev.next = curr;
// 	curr.prev = prev;
// 	this.size -= num;
// 	return retArr;
// };
// DoublyLinkedList.prototype.toString = function() {
// 	if (this._isEmpty()) return '';
// 	var retStr = '';
// 	var curr = this.head.next;
// 	while (curr.next) {
// 		retStr += curr.val + ', ';
// 		curr = curr.next;
// 	}
// 	retStr += curr.val;
// 	return retStr;
// };

// function BSTNode(el) {
// 	this.val = el;
// 	this.left = null;
// 	this.right = null;
// }
// function BST() {
// 	this.root = null;
// 	this.size = 0;
// }
// BST.prototype._isEmpty = function() {
// 	if (this.size === 0) return true;
// 	return false;
// };
// BST.prototype.insert = function(el, root) {
// 	root = root || this.root;
// 	var n = new BSTNode(el);
// 	if (this._isEmpty()) {
// 		this.root = n;
// 		this.size++;
// 	}
// 	else {
// 		if (el <= root.val) {
// 			if (root.left === null) {
// 				root.left = n;
// 				this.size++;
// 				return;
// 			}
// 			else {
// 				return this.insert(el, root.left);
// 			}
// 		}
// 		else if (el > root.val) {
// 			if (root.right === null) {
// 				root.right = n;
// 				this.size++;
// 				return;
// 			}
// 			else {
// 				return this.insert(el, root.right);
// 			}
// 		}
// 	}
// };
// BST.prototype.preorder = function() {
// 	var retStr = '';
// 	var self = this;
// 	function innerPreorder(curr) {
// 		if (curr === null) return;
// 		curr = curr || self.root;
// 		retStr += curr.val;
// 		innerPreorder(curr.left);
// 		innerPreorder(curr.right);
// 	};
// 	innerPreorder();
// 	return retStr;
// };
// BST.prototype.inorder = function() {
// 	var retStr = '';
// 	var self = this;
// 	function innerInorder(curr) {
// 		if (curr === null) return;
// 		curr = curr || self.root;
// 		innerInorder(curr.left);
// 		retStr += curr.val;
// 		innerInorder(curr.right);
// 	}
// 	innerInorder();
// 	return retStr;
// };
// BST.prototype.postorder = function() {
// 	var retStr = '';
// 	var self = this;
// 	function innerPostorder(curr) {
// 		if (curr === null) return;
// 		curr = curr || self.root;
// 		innerPostorder(curr.left);
// 		innerPostorder(curr.right);
// 		retStr += curr.val;
// 	}
// 	innerPostorder();
// 	return retStr;
// };
// BST.prototype.levelorder = function() {
// 	var q = [];
// 	var curr;
// 	var retStr = '';
// 	q.push(this.root);
// 	while(q.length > 0) {
// 		curr = q.shift();
// 		retStr += curr.val;
// 		if (curr.left) q.push(curr.left);
// 		if (curr.right) q.push(curr.right);
// 	}
// 	return retStr;
// };
// BST.prototype.min = function(root) {
// 	var curr = root || this.root;
// 	if (curr.left === null)
// 		return curr;
// 	while (curr.left !== null) {
// 		curr = curr.left;
// 	}
// 	return curr;
// };
// BST.prototype.max = function(root) {
// 	var curr = root || this.root;
// 	if (curr.right === null)
// 			return curr;
// 	while (curr.right !== null) {
// 		curr = curr.right;
// 	}
// 	return curr;
// };
// BST.prototype.find = function(val, curr) {
// 	if (curr === null) return false;
// 	curr = curr || this.root;
// 	if (curr.val === val) return true;
// 	else {
// 		if (val < curr.val)
// 			return this.find(val, curr.left);
// 		else if (val > curr.val)
// 			return this.find(val, curr.right);
// 	}
// };
// BST.prototype.findParent = function(val, curr) {
// 	curr = curr || this.root;
// 	if (curr.left === null && curr.right === null)
// 		throw 'no parent';

// 	if (curr.left.val === val || curr.right.val === val) {
// 		return curr;
// 	}
// 	else {
// 		if (val < curr.val)
// 			return this.findParent(val, curr.left);
// 		else if (val > curr.val)
// 			return this.findParent(val, curr.right);
// 	}
// }
// BST.prototype.remove = function(val) {
// 	var parent = this.findParent(val);
// 	if (parent.left.val === val) {
// 		var el = parent.left;
// 		var parentDir = 'left';
// 	}
// 	else if (parent.right.val === val) {
// 		var el = parent.right;
// 		var parentDir = 'right';
// 	}

// 	// leaf
// 	if (el.left === null && el.right === null) {
// 		parent[parentDir] = null;
// 	}
// 	// two children
// 	else if (el.left !== null && el.right !== null) {
// 		// find min in right subtree
// 		var curr = el.right;
// 		var minParent = el;
// 		var minParentDir = 'right';
// 		while (curr.left !== null) {
// 			minParentDir = 'left';
// 			minParent = curr;
// 			curr = curr.left;
// 		}
// 		var min = curr;

// 		// replace el with min
// 		el.val = min.val;
// 		// remove min from right subtree
// 		minParent[minParentDir] = min.right;
// 	}
// 	// one child
// 	else {
// 		if (el.left !== null)
// 			parent[parentDir] = el.left;
// 		else
// 			parent[parentDir] = el.right;
// 	}
// };

// function Hash() {
// 	this.arr = [];
// }
// Hash.prototype._hash = function(str) {
// 	return str.charCodeAt(0) - 96;
// };
// Hash.prototype.set = function(key, val) {
// 	var index = this._hash(key);
// 	if (typeof this.arr[index] === 'undefined') {
// 		this.arr[index] = new LinkedList();
// 		this.arr[index].push({key: key, val: val});
// 	}
// 	else {
// 		var linkedlist = this.arr[index];
// 		var curr = linkedlist.head.next;
// 		while (curr) {
// 			if (curr.val.key === key) {
// 				curr.val.val = val;
// 				break;
// 			}
// 			curr = curr.next;
// 		}

// 		// if key doesn't already exist
// 		this.arr[index].push({key: key, val: val});
// 	}
// };
// Hash.prototype.get = function(key) {
// 	var index = this._hash(key);
// 	if (typeof this.arr[index] === 'undefined') return -1;
// 	var linkedlist = this.arr[index];
// 	var curr = linkedlist.head.next;
// 	while (curr) {
// 		if (curr.val.key === key) return curr.val.val;
// 		curr = curr.next;
// 	}
// 	return -1;
// };

function Stack() {
	this.data = {};
	this._size = 0;
}
Stack.prototype._isEmpty = function() {
	return this._size === 0;
};
Stack.prototype.push = function(el) {
	this.data[this._size] = el;
	this._size++;
};
Stack.prototype.pop = function() {
	if (this._isEmpty()) throw "an empty stack can't pop";
	else {
		var toRet = this.data[this._size-1];
		delete this.data[this._size-1];
		this._size--;
		return toRet;
	}
};
Stack.prototype.size = function() {
	return this._size;
};
Stack.prototype.peek = function() {
	return this.data[this._size-1];
};
Stack.prototype.clear = function() {
	this.data = {};
	this._size = 0;
};
Stack.prototype.toString = function() {
	if (this._isEmpty()) return ''
	var retStr = '';
	for (var i = 0; i < this._size-1; i++) {
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
Queue.prototype.enqueue = function(el) {
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
Queue.prototype.dequeue = function() {
	if (this._isEmpty()) throw "an empty queue can't dequeue";
	else if (this.size() === 1) {
		var toRet = this.data[this.head];
		this.data = {};
		this.head = null;
		this.tail = null;
		return toRet;
	}
	else {
		var toRet = this.data[this.head];
		delete this.data[this.head];
		this.head++;
		return toRet;
	}
};
Queue.prototype.size = function() {
	if (this._isEmpty()) return 0;
	return this.tail - this.head + 1;
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
	for (var i = this.head; i < this.tail; i++) {
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
	var toRet = this.data[this.tail];
	delete this.data[this.tail];
	this.tail--;
	return toRet;
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
	var toRet = this.data[this.head];
	delete this.data[this.head];
	this.head++;
	return toRet;
};
List.prototype.clear = function() {
	this.data = {};
	this.head = null;
	this.tail = null;
};
List.prototype.size = function() {
	if (this._isEmpty()) return 0;
	return this.tail - this.head + 1;
};
List.prototype.indexOf = function(el) {
	for (var i = this.head; i <= this.tail; i++) {
		if (this.data[i] === el)
			return i - this.head;
	}
	return -1;
};
List.prototype.insert = function(el, pos) {
	pos += this.head;
	if (this._isEmpty()) {
		this.data[0] = el;
		this.head = 0;
		this.tail = 0;
	}
	else if (this.tail-pos < pos-this.head) { // shift right half
		for (var i = this.tail+1; i > pos; i--) {
			this.data[i] = this.data[i-1];
		}
		this.data[pos] = el;
		this.tail++;
	}
	else { // shift left half
		for (var i = this.head-1; i < pos-1; i++) {
			this.data[i] = this.data[i+1];
		}
		this.data[pos-1] = el;
		this.head--;
	}
};
List.prototype.removeEl = function(el) {
	if (this._isEmpty()) throw "can't removeEl";
	var index = this.indexOf(el);
	if (index === -1) throw "can't removeEl";
	return this.removeIndex(index);
};
List.prototype.removeIndex = function(index) {
	index += this.head;
	if (this._isEmpty()) throw "can't removeIndex";
	else if (index < this.head || index > this.tail) throw "can't removeIndex";
	else if (this.tail-index < index-this.head) { // shift right half
		for (var i = index; i < this.tail; i++) {
			this.data[i] = this.data[i+1];
		}
		this.tail--;
	}
	else {
		for (var i = index; i > this.head; i--) {
			this.data[i] = this.data[i-1];
		}
		this.head++;
	}
};
List.prototype.splice = function(start, num) {
	start += this.head;
	var retArr = [];
	for (var i = start; i < start+num; i++) {
		retArr.push(this.data[i]);
		delete this.data[i];
	}

	for (var i = start+num; i <= this.tail; i++) {
		this.data[i-num] = this.data[i];
		delete this.data[i];
	}

	this.tail -= num;
	return retArr;
};
List.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	for (var i = this.head; i < this.tail; i++) {
		retStr += this.data[i] + ', ';
	}
	retStr += this.data[i];
	return retStr;
};

function Node(val) {
	this.val = val;
	this.next = null;
	this.prev = null;
}
function LinkedList() {
	this.head = new Node('head');
	this.tail = this.head;
	this.size = 0;
}
LinkedList.prototype._isEmpty = function() {
	return this.size === 0;
};
LinkedList.prototype.push = function(el) {
	var n = new Node(el);
	this.tail.next = n;
	this.tail = n;
	this.size++;
};
LinkedList.prototype.find = function(el) {
	var curr = this.head.next;
	while (curr) {
		if (curr.val === el) return curr;
		curr = curr.next;
	}
	return -1;
};
LinkedList.prototype.findPrevious = function(el) {
	var curr = this.head;
	while (curr.next) {
		if (curr.next.val === el) return curr;
		curr = curr.next;
	}
	return -1;
};
LinkedList.prototype.pop = function() {
	if (this._isEmpty()) throw "can't pop from an empty linked list";
	var oldTail = this.tail;
	var prev = this.findPrevious(oldTail.val);
	this.tail = prev;
	prev.next = null;
	this.size--;
	return oldTail.val;
};
LinkedList.prototype.unshift = function(el) {
	var n = new Node(el);
	if (this._isEmpty()) {
		this.tail.next = n;
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
		var toRet = this.head.next;
		this.tail = this.head;
		this.size--;
		return toRet.val;
	}
	else {
		var oldFirst = this.head.next;
		var oldSecond = oldFirst.next;
		this.head.next = oldSecond;
		this.size--;
		return oldFirst.val;
	}
};
LinkedList.prototype.clear = function() {
	this.tail = this.head;
	this.size = 0;
};
LinkedList.prototype.insert = function(el, elToInsertAfter) {
	var prev = this.find(elToInsertAfter);
	var after = prev.next;
	var n = new Node(el);
	prev.next = n;
	n.next = after;
	this.size++;
};
LinkedList.prototype.removeEl = function(el) {
	var prev = this.findPrevious(el);
	var next = prev.next.next;
	prev.next = next;
	this.size--;
	if (next === null) this.tail = prev;
	else this.tail = next;
};
LinkedList.prototype.splice = function(el, num) {
	var prev = this.findPrevious(el);
	var curr = prev.next;
	var retArr = [];
	for (var i = 0; i < num; i++) {
		retArr.push(curr.val);
		curr = curr.next;
	}
	prev.next = curr;
	this.size -= num;
	return retArr;
};
LinkedList.prototype.toString = function() {
	if (this._isEmpty()) return '';
	var retStr = '';
	var curr = this.head.next;
	while (curr.next) {
		retStr += curr.val + ', ';
		curr = curr.next;
	}
	retStr += curr.val;
	return retStr;
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
	var oldTail = this.tail;
	oldTail.next = n;
	n.prev = oldTail;
	this.tail = n;
	this.size++;
};
DoublyLinkedList.prototype.pop = function() {
	if (this._isEmpty()) throw "can't pop from an empty doubly linked list";
	else {
		var oldTail = this.tail;
		var newTail = oldTail.prev;
		newTail.next = null
		this.tail = newTail;
		this.size--;
		return oldTail.val;
	}
};
DoublyLinkedList.prototype.unshift = function(el) {
	var n = new Node(el);
	if (this._isEmpty()) {
		this.head.next = n;
		n.prev = this.head;
		this.tail = n;
	}
	else {
		var oldFirst = this.head.next;
		this.head.next = n;
		n.next = oldFirst;
		n.prev = this.head;
		oldFirst.prev = n;
	}
	this.size++;
};
DoublyLinkedList.prototype.shift = function() {
	if (this._isEmpty()) throw "can't shift from an empty doubly linked list";
	else if (this.size === 1) {
		var oldFirst = this.head.next;
		this.tail = this.head;
		this.head.next = null;
	}
	else {
		var oldFirst = this.head.next;
		var newFirst = oldFirst.next;
		this.head.next = newFirst;
		newFirst.prev = this.head;
	}
	this.size--;
	return oldFirst.val;
};
DoublyLinkedList.prototype.find = function(el) {
	var curr = this.head.next;
	while (curr) {
		if (curr.val === el) return curr;
		curr = curr.next;
	}
	return -1;
};
DoublyLinkedList.prototype.insert = function(el, elToInsertAfter) {
	var n = new Node(el);
	var prev = this.find(elToInsertAfter);
	if (prev === -1) throw "invalid elToInsertAfter";
	if (prev.next === null) {
		prev.next = n;
		n.prev = prev;
		this.tail = n;
	}
	else {
		var next = prev.next;
		prev.next = n;
		n.prev = prev;
		n.next = next;
		next.prev = n;
	}
	this.size++;
};
DoublyLinkedList.prototype.splice = function(el, num) {
	var start = this.find(el);
	var prev = start.prev;
	if (start === -1) throw "can't find el to start splice at";
	var curr = start;
	var retArr = [];
	for (var i = 0; i < num; i++) {
		retArr.push(curr.val);
		curr = curr.next;
	}
	prev.next = curr;
	curr.prev = prev;
	if (curr.next === null) { this.tail = curr; }
	this.size -= num;
	return retArr;
};
DoublyLinkedList.prototype.removeEl = function(el) {
	var elToRemove = this.find(el);
	if (elToRemove === -1) throw "didn't find element";
	else if (elToRemove.next === null) {
		var prev = elToRemove.prev;
		prev.next = null;
		this.tail = prev;
	}
	else {
		var prev = elToRemove.prev;
		var next = elToRemove.next;
		prev.next = next;
		next.prev = prev;
	}
	this.size--;
};
DoublyLinkedList.prototype.clear = function() {
	this.tail = this.head;
	this.head.next = null;
	this.size = 0;
};
DoublyLinkedList.prototype.toString = function() {
	if (this._isEmpty()) return '';
	else {
		var retStr = '';
		var curr = this.head.next;
		while (curr.next) {
			retStr += curr.val + ', ';
			curr = curr.next;
		}
		retStr += curr.val;
		return retStr;
	}
};

function BSTNode(el) {
	this.val = el;
	this.left = null;
	this.right = null;
}
function BST() {
	this.root = null;
}
BST.prototype._isEmpty = function() {
	return this.root === null;
};
BST.prototype.insert = function(el, curr) {
	var n = new BSTNode(el);
	curr = curr || this.root;
	if (this._isEmpty()) {
		this.root = n;
	}
	else if (el <= curr.val) {
		if (curr.left === null) curr.left = n;
		else this.insert(el, curr.left);
	}
	else if (el > curr.val) {
		if (curr.right === null) curr.right = n;
		else this.insert(el, curr.right);
	}
};
BST.prototype.preorder = function() {
	var retStr = '';
	var self = this;
	function preorderInner(curr) {
		if (curr === null) return;
		curr = curr || self.root;
		retStr += curr.val;
		preorderInner(curr.left);
		preorderInner(curr.right);
	}
	preorderInner();
	return retStr;
};
BST.prototype.inorder = function() {
	var retStr = '';
	var self = this;
	function inorderInner(curr) {
		if (curr === null) return;
		curr = curr || self.root;
		inorderInner(curr.left);
		retStr += curr.val;
		inorderInner(curr.right);
	}
	inorderInner();
	return retStr;
};
BST.prototype.postorder = function() {
	var retStr = '';
	var self = this;
	function postorderInner(curr) {
		if (curr === null) return;
		curr = curr || self.root;
		postorderInner(curr.left);
		postorderInner(curr.right);
		retStr += curr.val;
	}
	postorderInner();
	return retStr;
};
BST.prototype.levelorder = function() {
	var retStr = '';
	var q = [];
	q.push(this.root);
	var curr;
	while (q.length > 0) {
		curr = q.shift();
		retStr += curr.val;
		if (curr.left) q.push(curr.left);
		if (curr.right) q.push(curr.right);
	}
	return retStr;
};
BST.prototype.min = function(curr) {
	curr = curr || this.root;
	while (curr.left) {
		curr = curr.left;
	}
	return curr;
};
BST.prototype.max = function(curr) {
	curr = curr || this.root;
	while (curr.right) {
		curr = curr.right;
	}
	return curr;
};
BST.prototype.find = function(el) {
	curr = this.root;
	while (curr) {
		if (el === curr.val) return true;
		else if (el < curr.val) curr = curr.left;
		else if (el > curr.val) curr = curr.right;
	}
	return false;
};
BST.prototype.findParent = function(el) {
	var curr = this.root;
	if (curr.val === el) return "root doesn't have a parent";
	while (curr.left || curr.right) {
		if (curr.left.val === el || curr.right.val === el) return curr;
		else if (el < curr.val) curr = curr.left;
		else if (el > curr.val) curr = curr.right;
	}
	return false;
};
BST.prototype.remove = function(elVal) {
	var parent = this.findParent(elVal);
	var parentDir, el;
	if (parent.left.val === elVal) {
		parentDir = 'left';
		el = parent.left;
	}
	else if (parent.right.val === elVal) {
		parentDir = 'right';
		el = parent.right;
	}

	if (el.left === null && el.right === null) { // leaf
		parent[parentDir] = null;
	}
	else if (el.left !== null && el.right !== null) { // two children
		var min = this.min(el.right).val;
		this.remove(min);
		el.val = min;
	}
	else { // one child
		if (el.left) parent[parentDir] = el.left;
		else parent[parentDir] = el.right;
	}
};

function Hash() {
	this.arr = [];
}
Hash.prototype._hash = function(key) {
	return key.charCodeAt(0) - 96;
};
Hash.prototype.set = function(key, val) {
	var index = this._hash(key);
	if (typeof this.arr[index] === 'undefined') {
		this.arr[index] = new LinkedList();
		this.arr[index].push({key: key, val: val});
	}
	else {
		var linkedlist = this.arr[index];
		var curr = linkedlist.head.next;
		while (curr) {
			if (curr.val.key === key) {
				curr.val.val = val;
				return;
			}
			curr = curr.next;
		}
		this.arr[index].push({key: key, val: val});
	}
};
Hash.prototype.get = function(key) {
	var index = this._hash(key);
	if (!this.arr[index]) return -1;
	var linkedlist = this.arr[index];
	var curr = linkedlist.head.next;
	while (curr) {
		if (curr.val.key === key) {
			return curr.val.val
		}
		curr = curr.next;
	}
	return -1;
};
