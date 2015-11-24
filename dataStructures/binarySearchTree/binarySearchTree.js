function Node(el) {
  this.el = el;
  this.left = { el: null, left: null, right: null };
  this.right = { el: null, left: null, right: null };
}

function BST() {
  this.root = new Node(null);
}

BST.prototype.insert = function(el, curr) {
  curr = curr || this.root;

  if (curr.el === null) {
    curr.el = el;
    curr.left = new Node(null);
    curr.right = new Node(null);
  }

  else if (el <= curr.el) {
    this.insert(el, curr.left);
  }

  else if (el > curr.el) {
    this.insert(el, curr.right);
  }
};

BST.prototype.find = function(el, curr) {
  curr = curr || this.root;

  if (curr.el === null) {
    return false;
  }

  else if (curr.el === el) {
    return true;
  }

  else if (el < curr.el) {
    return this.find(el, curr.left);
  }

  else if (el > curr.el) {
    return this.find(el, curr.right);
  }
};

BST.prototype.levelorder = function(cb) {
  var queue = [this.root];
  var curr;

  while (queue.length > 0) {
    curr = queue.shift();

    if (curr.left.el) {
      queue.push(curr.left);
    }

    if (curr.right.el) {
      queue.push(curr.right);
    }

    cb(curr.el);
  }
};

BST.prototype.preorder = function(cb, curr) {
  curr = curr || this.root;

  if (curr.el === null) {
    return;
  }

  cb(curr.el);
  this.preorder(cb, curr.left);
  this.preorder(cb, curr.right);
};

BST.prototype.inorder = function(cb, curr) {
  curr = curr || this.root;

  if (curr.el === null) {
    return;
  }

  this.inorder(cb, curr.left);
  cb(curr.el);
  this.inorder(cb, curr.right);
};

BST.prototype.postorder = function(cb, curr) {
  curr = curr || this.root;

  if (curr.el === null) {
    return;
  }

  this.postorder(cb, curr.left);
  this.postorder(cb, curr.right);
  cb(curr.el);
};

BST.prototype.min = function(curr) {
  curr = curr || this.root;

  if (curr.left.el === null) {
    return curr.el;
  }

  return this.min(curr.left);
};

BST.prototype.max = function(curr) {
  curr = curr || this.root;

  if (curr.right.el === null) {
    return curr.el;
  }

  return this.max(curr.right);
};

BST.prototype.height = function(curr) {
  curr = curr || this.root;

  if (curr.el === null) {
    return 0;
  }

  var leftSubtreeHeight = this.height(curr.left);
  var rightSubtreeHeight = this.height(curr.right);

  return 1 + Math.max(leftSubtreeHeight, rightSubtreeHeight);
};

BST.prototype.remove = function (el) {
  var element, parentDir, minRightSubtree;
  var parent = this._findParent(el);
  if (!parent) {
    if (el !== this.root.el) {
      return false;
    }

    // two children
    if (this.root.left.el !== null && this.root.right.el !== null) {
      minRightSubtree = this.min(this.root.right);
      this.remove(minRightSubtree);
      this.root.el = minRightSubtree;
    }

    // one child
    else if (this.root.left.el) {
      this.root = this.root.left;
    }
    else if (this.root.right.el) {
      this.root = this.root.right;
    }

    // no children
    else {
      this.root = new Node(null);
    }
    return el;
  }

  if (parent.left.el === el) {
    element = parent.left;
    parentDir = 'left';
  }
  else if (parent.right.el === el) {
    element = parent.right;
    parentDir = 'right';
  }

  // two children
  if (element.left.el && element.right.el) {
    minRightSubtree = this.min(element.right);
    this.remove(minRightSubtree);
    element.el = minRightSubtree;
    return el;
  }

  // one child
  else if (element.left.el) {
    parent[parentDir] = element.left;
    return el;
  }
  else if (element.right.el) {
    parent[parentDir] = element.right;
    return el;
  }

  // leaf node
  else {
    parent[parentDir] = new Node(null);
    return el;
  }
}

BST.prototype._findParent = function(el, curr) {
  curr = curr || this.root;

  if (curr.el === null || curr.el === el) {
    return false;
  }

  else if (curr.left.el === el || curr.right.el === el) {
    return curr;
  }

  else if (el < curr.el) {
    return this._findParent(el, curr.left);
  }

  else if (el > curr.el) {
    return this._findParent(el, curr.right);
  }
};

BST.prototype.isBst = function(curr, min, max) {
  curr = curr || this.root;
  min = min || Number.NEGATIVE_INFINITY;
  max = max || Number.POSITIVE_INFINITY;

  if (curr.el === null) {
    return true;
  }

  if (
    (curr.el > min && curr.el < max) &&
    this.isBst(curr.left, min, curr.el) &&
    this.isBst(curr.right, curr.el, max)
  ) {
    return true;
  }
  return false;
};
