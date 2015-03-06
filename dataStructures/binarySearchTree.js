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
		} else {
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
	} else {
		el = parent.right;
		parentDir = 'right';
	}

	if (!el.left && !el.right) { // leaf
		parent[parentDir] = null;
	} else if (el.left && el.right) { // two children
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
	} else { // one child
		var child;
		if (el.left) child = el.left;
		else child = el.right;
		parent[parentDir] = child;
	}
};