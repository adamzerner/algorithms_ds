function Node(el) {
  this.data = el;
  this.next = null;
}

function QueueLinkedList() {
  this.head = new Node('head');
  this._size = 0;
  this._front = this.head;
  this._back = this.head;
}

QueueLinkedList.prototype.toString = function() {
  if (this._size === 0) {
    return '';
  }

  var str = '';
  var curr = this.head.next;

  while (curr) {
    str += curr.data.toString() + ', ';
    curr = curr.next;
  }

  return str.slice(0, -2);
};

QueueLinkedList.prototype.enqueue = function(el) {
  var newNode = new Node(el);

  this._back.next = newNode;
  this._back = newNode;

  if (this._size === 0) {
    this.head.next = newNode;
    this._front = newNode;
  }

  this._size++;
};

QueueLinkedList.prototype.dequeue = function() {
  if (this._size === 0) {
    throw "an empty queue can't dequeue";
  }

  var oldFront = this._front;

  this.head.next = this._front.next;

  if (this._size === 1) {
    this._front = this.head;
    this._back = this.head;
  }
  else {
    this._front = this.head.next;
  }

  this._size--;
  return oldFront.data;
};

QueueLinkedList.prototype.front = function() {
  if (this._size === 0) {
    throw "can't get the front of an empty queue";
  }

  return this._front.data;
};

QueueLinkedList.prototype.clear = function() {
  if (this._size === 0) {
    throw "can't clear an empty queue";
  }

  this.head.next = null;
  this._front = this.head;
  this._back = this.head;
  this._size = 0;
};

QueueLinkedList.prototype.size = function() {
  return this._size;
};
