describe('A Doubly Linked List', function() {
  var l;
  beforeEach(function() {
    l = new DoublyLinkedList();
  });
  it('can push', function() {
    l.push('a');
    expect(l.toString()).toBe('a');
    l.push('b');
    expect(l.toString()).toBe('a, b');
  });
  it('can pop', function() {
    expect(function() {
      l.pop()
    }).toThrow("can't pop from an empty doubly linked list");
    l.push('a');
    l.push('b');
    var ret = l.pop();
    expect(ret).toBe('b');
    expect(l.toString()).toBe('a');
  });
  it('can unshift', function() {
    l.unshift('a');
    expect(l.toString()).toBe('a');
    l.push('b');
    l.unshift('c');
    expect(l.toString()).toBe('c, a, b');
  });
  it('can shift', function() {
    expect(function() {
      l.shift()
    }).toThrow("can't shift from an empty doubly linked list"); // zero elements
    l.push('a');
    var ret = l.shift();
    expect(ret).toBe('a'); // one element
    l.push('b');
    l.push('c');
    ret = l.shift();
    expect(ret).toBe('b'); // two elements
  });
  it('can clear', function() {
    l.push('a');
    l.push('b');
    l.push('c');
    l.clear();
    expect(l.toString()).toBe('');
  });
  it('can size', function() {
    expect(l.size).toBe(0); // starts off at zero
    l.push('a');
    expect(l.size).toBe(1); // pushing increments
    l.pop();
    expect(l.size).toBe(0); // popping decrements
    l.unshift('a');
    expect(l.size).toBe(1); // unshifting increments
    l.shift();
    expect(l.size).toBe(0); // shifting decrements
    l.push('a');
    l.push('b');
    l.push('c');
    l.clear();
    expect(l.size).toBe(0); // clearing resets
    l.push('a');
    l.insert('b', 'a');
    expect(l.size).toBe(2); // inserting increments
    l.removeEl('a');
    expect(l.size).toBe(1); // removeEl decrements
    l.push('a');
    l.push('b');
    l.push('c');
    l.splice('b', 2);
    expect(l.size).toBe(2); // splice decrements
  });
  it('can find', function() {
    expect(l.find('z')).toBe(false);
    l.push('a');
    expect(l.find('a').val).toBe('a');
    l.push('b');
    expect(l.find('b').val).toBe('b');
    expect(l.find('z')).toBe(false);
  });
  it('can insert', function() {
    l.push('a');
    l.push('b');
    l.push('d');
    l.insert('c', 'b');
    expect(l.toString()).toBe('a, b, c, d'); // middle
    l.insert('e', 'd');
    expect(l.toString()).toBe('a, b, c, d, e'); // end
  });
  it('can removeEl', function() {
    l.push('a');
    l.push('b');
    l.push('c');
    l.removeEl('b');
    expect(l.toString()).toBe('a, c'); // middle
    l.removeEl('c');
    expect(l.toString()).toBe('a'); // end
    l.push('b');
    l.removeEl('a');
    expect(l.toString()).toBe('b'); // front
    l.removeEl('b');
    expect(l.toString()).toBe(''); // single
  });
  it('can splice', function() {
    // removes and returns
    l.push('a');
    l.push('b');
    l.push('c');
    l.push('d');
    var ret = l.splice('b', 2);
    expect(ret).toEqual(['b', 'c']);
    expect(l.toString()).toBe('a, d');
  });
  it('can toString', function() {
    expect(l.toString()).toBe('');
    l.push('a');
    l.push('b');
    l.push('c');
    expect(l.toString()).toBe('a, b, c');
  });
});