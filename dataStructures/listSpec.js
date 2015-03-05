describe('A List', function() {
  var l;
  beforeEach(function() {
    l = new List();
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
    }).toThrow("an empty list can't pop");
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
    }).toThrow("an empty list can't shift");
    l.push('a');
    var ret = l.shift();
    expect(ret).toBe('a');
    l.push('b');
    l.push('c');
    ret = l.shift();
    expect(ret).toBe('b');
  });
  it('can clear', function() {
    l.push('a');
    l.push('b');
    l.push('c');
    l.clear();
    expect(l.toString()).toBe('');
  });
  it('can size', function() {
    expect(l.size()).toBe(0); // starts off at zero
    l.push('a');
    expect(l.size()).toBe(1); // pushing increments
    l.pop();
    expect(l.size()).toBe(0); // popping decrements
    l.unshift('a');
    expect(l.size()).toBe(1); // unshifting increments
    l.shift();
    expect(l.size()).toBe(0); // shifting decrements
    l.push('a');
    l.push('b');
    l.push('c');
    l.clear();
    expect(l.size()).toBe(0); // clearing resets
    l.insert('a', 0);
    expect(l.size()).toBe(1); // inserting increments
    l.removeEl('a');
    expect(l.size()).toBe(0); // removeEl decrements
    l.push('a');
    l.removeIndex(0);
    expect(l.size()).toBe(0); // removeIndex decrements
    l.push('a');
    l.push('b');
    l.push('c');
    l.splice(1,2);
    expect(l.size()).toBe(1); // splice decrements
  });
  it('can indexOf', function() {
    l.unshift('c');
    l.unshift('b');
    l.unshift('a');
    l.push('d');
    expect(l.indexOf('c')).toBe(2); // when head is < 0
    l.clear();
    l.push('x');
    l.push('x');
    l.push('a');
    l.push('b');
    l.push('c');
    l.shift();
    l.shift();
    expect(l.indexOf('b')).toBe(1);
  });
  it('can insert', function() {
    l.insert('c', 0);
    expect(l.toString()).toBe('c'); // can initialize with insert
    l.unshift('b');
    l.unshift('a');
    l.insert('d', 3);
    expect(l.toString()).toBe('a, b, c, d'); // can insert at end
    l.insert('e', 0);
    expect(l.toString()).toBe('e, a, b, c, d'); // can insert in front
    l.insert('f', 1);
    expect(l.toString()).toBe('e, f, a, b, c, d'); // can insert in front half
    l.insert('g', 4);
    expect(l.toString()).toBe('e, f, a, b, g, c, d'); // can insert in back half
  });
  it('can removeIndex', function() {
    expect(function() {
      l.removeIndex(10)
    }).toThrow("can't removeIndex"); // empty list
    l.push('a');
    l.push('b');
    l.push('c');
    l.push('d');
    l.removeIndex(1);
    expect(l.toString()).toBe('a, c, d'); // can remove from front half
    l.push('e');
    l.removeIndex(2);
    expect(l.toString()).toBe('a, c, e'); // can remove from back half
    expect(function() {
      l.removeIndex(10)
    }).toThrow("can't removeIndex"); // can't remove an element that doesn't exist
  });
  it('can removeEl', function() {
    expect(function() {
      l.removeEl('z')
    }).toThrow("can't removeEl"); // empty list
    l.push('a');
    l.push('b');
    l.push('c');
    l.push('d');
    l.removeEl('b'); 
    expect(l.toString()).toBe('a, c, d'); // can remove from front half
    l.push('e');
    l.removeEl('d');
    expect(l.toString()).toBe('a, c, e'); // can remove from back half
    expect(function() {
      l.removeEl('z')
    }).toThrow("can't removeEl"); // element doesn't exist
  });
  it('can splice', function() {
    // removes and returns
    l.push('a');
    l.push('b');
    l.push('c');
    l.push('d');
    l.push('e');
    var ret = l.splice(2,2);
    expect(ret).toEqual(['c', 'd']);
    expect(l.toString()).toBe('a, b, e');
  });
  it('can toString', function() {
    expect(l.toString()).toBe('');
    l.push('a');
    l.push('b');
    l.push('c');
    expect(l.toString()).toBe('a, b, c');
  });
});