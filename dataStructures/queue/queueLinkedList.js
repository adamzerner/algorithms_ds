function Node(el) {
  this.el = el;
  this.next = null;
}

function QueueLinkedList() {
  this.head = new Node('head');
  this.back = this.head;
  this._size = 0;
}

QueueLinkedList.prototype.toString = function() {
  var curr = this.head.next;
  var str = '';

  while (curr) {
    str += curr.el.toString();
    curr = curr.next;
  }

  return str;
};

QueueLinkedList.prototype.enqueue = function(el) {
  var newNode = new Node(el);
  this.back.next = newNode;
  this.back = newNode;
  this._size++;
};

QueueLinkedList.prototype.dequeue = function() {
  var oldFront;

  if (this._size === 0) {
    throw "an empty queue can't dequeue";
  }

  else if (this._size === 1) {
    oldFront = this.head.next;
    this.head.next = null;
    this.back = this.head;
    this._size = 0;
  }

  else {
    oldFront = this.head.next
    this.head.next = oldFront.next;
    this._size--;
  }

  return oldFront.el;
};


QueueLinkedList.prototype.front = function() {
  if (this._size === 0) {
    throw "can't get the front of an empty queue";
  }

  return this.head.next.el;
};

QueueLinkedList.prototype.clear = function() {
  if (this._size === 0) {
    throw "can't clear an empty queue";
  }

  this.head = new Node('head');
  this.back = this.head;
  this._size = 0;
};

QueueLinkedList.prototype.size = function() {
  return this._size;
};
