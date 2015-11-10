function QueueArray() {
  this.data = new Array(5);
  this._size = 0;
  this._front = -1;
  this._back = -1;
}

// using a circular array
QueueArray.prototype._next = function(index) {
  if (index === this.data.length - 1) {
    return 0;
  }
  return index + 1;
};

QueueArray.prototype.toString = function() {
  if (this._size === 0) {
    return '';
  }

  var str = '';
  var currIndex = this._front;

  for (var i = 0; i < this._size; i++) {
    str += this.data[currIndex] + ', ';
    currIndex = this._next(currIndex);
  }

  return str.slice(0, -2);
};

QueueArray.prototype.enqueue = function(el) {
  if (this._size === 0) {
    this._front = 0;
    this._back = 0;
    this.data[0] = el;
    this._size++;

    return;
  }

  // resize array
  if (this._size === this.data.length) {
    var oldArray = this.data;
    this.data = new Array(oldArray.length * 2);

    var currIndex = this._front;

    for (var i = 0; i < this._size; i++) {
      this.data[currIndex] = oldArray[currIndex];
      currIndex = this._next(currIndex);
    }
  }

  this._back = this._next(this._back);
  this.data[this._back] = el;

  this._size++;
};

QueueArray.prototype.dequeue = function() {
  if (this._size === 0) {
    throw "an empty queue can't dequeue";
  }

  else if (this._size === 1) {
    this.data = new Array(5);
    this._size = 0;
    this._front = -1;
    this._back = -1;
  }

  else {
    // cut in half if <= 25% full after dequeue
    if ((this._size - 1) / this.data.length <= .25) {
      var oldArray = this.data;
      this.data = new Array(Math.ceil(this.data.length / 2));

      var currIndex = this._front;

      for (var i = 0; i < this._size; i++) {
        this.data[i] = oldArray[currIndex];
        currIndex = this._next(currIndex);
      }

      this._front = 0;
      this._back = this._size - 1;
    }

    var oldFront = this.data[this._front];
    this._front = this._next(this._front);
    this._size--;
    return oldFront;
  }
};

QueueArray.prototype.front = function() {
  if (this._size === 0) {
    throw "can't get the front of an empty queue";
  }

  return this.data[this._front];
};

QueueArray.prototype.clear = function() {
  if (this._size == 0) {
    throw "can't clear an empty queue";
  }

  this.data = new Array(5);
  this._size = 0;
  this._front = -1;
  this._back = -1;
};

QueueArray.prototype.size = function() {
  return this._size;
};
