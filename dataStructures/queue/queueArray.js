function QueueArray() {
  this.data = new Array(5);
  this._front = -1;
  this._back = -1;
}

QueueArray.prototype.toString = function() {
  if (this._front === -1) {
    return '';
  }

  var str = '';

  var curr = this._front;
  for (var i = this._front; i <= this._back; i++) {
    str += this.data[curr];
    curr = this._next(curr);
  }

  return str;
};

QueueArray.prototype.enqueue = function(el) {
  if (this._front === -1) {
    this.data[0] = el;
    this._front = this._back = 0;
    return;
  }

  if (this.size() === this.data.length) {
    var oldData = this.data;
    this.data = new Array(this.data.length * 2);

    for (var i = this._front, j = 0; i <= this._back; i = this._next(i), j++) {
      this.data[j] = oldData[i];
    }

    this._front = 0;
    this._back = j - 1;

    this._back = this._next(this._back);
    this.data[this._back] = el;
    return;
  }

  this._back = this._next(this._back);
  this.data[this._back] = el;
};

QueueArray.prototype.dequeue = function() {
  if (this._front === -1) {
    throw "an empty queue can't dequeue";
  }

  var toReturn = this.data[this._front];
  this._front = this._next(this._front);

  if ((this.size() / this.data.length) <= 0.25) {
    var newData = new Array(Math.ceil(this.data.length / 2));

    for (var i = this._front, j = 0; i <= this._back; i = this._next(i), j++) {
      newData[j] = this.data[i];
    }

    this._front = 0;
    this._back = j - 1;
    this.data = newData;
  }

  return toReturn;
};

QueueArray.prototype.size = function() {
  if (this._front === -1) {
    return 0;
  }
  return this._back - this._front + 1;
};

QueueArray.prototype.front = function() {
  if (this._front === -1) {
    throw "can't get the front of an empty queue";
  }
  return this.data[this._front];
};

QueueArray.prototype.clear = function() {
  if (this._front === -1) {
    throw "can't clear an empty queue";
  }

  this.data = new Array(5);
  this._front = -1;
  this._back = -1;
};

QueueArray.prototype._next = function(i) {
  if (i === this.data.length - 1) {
    return 0;
  }
  return i + 1;
}
