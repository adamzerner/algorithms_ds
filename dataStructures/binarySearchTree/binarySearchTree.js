function Node(el) {
  this.el = el;
  this.left = { el: null, left: null, right: null };
  this.right = { el: null, left: null, right: null };
}

function BST() {
  this.root = new Node(null);
}

BST.prototype.insert = function(el, root) {
  root = root || this.root;

  if (root.el === null) {
    root.el = el;
    root.left = { el: null, left: null, right: null };
    root.right = { el: null, left: null, right: null };
  }
  else if (el < root.el) {
    this.insert(el, root.left);
  }
  else if (el > root.el) {
    this.insert(el, root.right);
  }
};

BST.prototype.find = function(el, root) {
  root = root || this.root;

  if (root.el === null) {
    return false;
  }

  if (el === root.el) {
    return true;
  }
  else if (el < root.el) {
    return this.find(el, root.left);
  }
  else if (el > root.el) {
    return this.find(el, root.right);
  }
};

BST.prototype.levelorder = function(cb) {
  var curr, queue = [];
  queue.push(this.root);

  while (queue.length > 0) {
    curr = queue.shift();
    cb(curr.el);

    if (curr.left.el) {
      queue.push(curr.left);
    }
    if (curr.right.el) {
      queue.push(curr.right);
    }
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

  var left = this.height(curr.left);
  var right = this.height(curr.right);

  return 1 + Math.max(left, right);
};

BST.prototype.remove = function(el) {
  var nodeToRemove, parentDirection, singleChildDirection, minRightSubtree;
  var parent = this._findParent(el);
  if (!parent) {
    if (el === this.root.el) {
      if (this.root.left.el === null && this.root.right.el === null) {
        this.root = new Node(null);
      }
      else if (this.root.left.el && this.root.right.el) {
        minRightSubtree = this.min(this.root.right);
        this.remove(minRightSubtree);
        this.root.el = minRightSubtree;
      }
      else {
        if (this.root.left) {
          this.root = this.root.left;
        }
        else if (this.root.right) {
          this.root = this.root.right
        }
      }
      return el;
    }
    else {
      return false;
    }
  }

  if (parent.left.el === el) {
    nodeToRemove = parent.left;
    parentDirection = 'left';
  }
  else if (parent.right.el === el) {
    nodeToRemove = parent.right;
    parentDirection = 'right';
  }

  // leaf node
  if (nodeToRemove.left.el === null && nodeToRemove.right.el === null) {
    parent[parentDirection] = { el: null, left: null, right: null };
    return el;
  }

  // two children
  else if (nodeToRemove.left.el && nodeToRemove.right.el) {
    minRightSubtree = this.min(nodeToRemove.right);
    this.remove(minRightSubtree);
    nodeToRemove.el = minRightSubtree;
    return el;
  }

  // one child (left)
  else {
    if (nodeToRemove.left.el) {
      singleChildDirection = 'left';
    }
    else if (nodeToRemove.right.el) {
      singleChildDirection = 'right';
    }

    parent[parentDirection] = nodeToRemove[singleChildDirection];
    return el;
  }
};

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

BST.prototype.isBst = function(min, max, curr) {
  min = min || Number.NEGATIVE_INFINITY;
  max = max || Number.POSITIVE_INFINITY;
  curr = curr || this.root;

  if (curr.el === null) {
    return true;
  }

  if (curr.el > max) {
    return false;
  }

  if (curr.el < min) {
    return false;
  }

  if (!this.isBst(min, curr.el, curr.left)) {
    return false;
  }

  if (!this.isBst(curr.el, max, curr.right)) {
    return false;
  }

  return true;
};
