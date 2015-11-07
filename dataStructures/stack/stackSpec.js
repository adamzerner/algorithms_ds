/*

INTERFACE:
- toString
- push
- pop
- peek
- clear
- size

*/


describe('Stack', function() {
  var s;

  beforeEach(function() {
    s = new Stack();
  });

  it('#toString', function() {
    s.push('a');
    s.push('b');
    s.push('c');
    var retStr = s.toString();
    expect(retStr).toBe('a, b, c');
  });

  describe('#push', function() {
    it('when empty', function() {
      s.push('a');
      expect(s.toString()).toEqual('a');
    });

    it('when populated', function() {
      s.push('a');
      s.push('b');
      expect(s.toString()).toEqual('a, b');
    });

    it('resizes', function() {
      // not applicable if using a linked list to implement
      if (!s.data) {
        return;
      }

      // should double if there's not enough room
      expect(s.data.length).toBe(5);

      s.push('a');
      s.push('b');
      s.push('c');
      s.push('d');
      s.push('e');
      s.push('f');
      expect(s.data.length).toBe(10);
    });
  });

  describe('#pop', function() {
    it('when empty', function() {
      expect(function() {
        s.pop()
      }).toThrow("can't pop from an empty stack");
    });

    it('when populated', function() {
      s.push('a');
      s.push('b');
      var ret = s.pop();
      expect(ret).toBe('b');
      expect(s.toString()).toEqual('a');
    });

    it('resizes', function() {
      // should cut in half if 25% full after pop
      expect(s.data.length).toBe(5);

      s.push('a');
      s.push('b');
      s.push('c');
      s.push('d');
      s.push('e');
      s.push('f');
      s.pop();
      s.pop();
      s.pop();
      s.pop();
      expect(s.data.length).toBe(5);
    });
  });

  describe('#peek', function() {
    it('when empty', function() {
      expect(function() {
        s.peek();
      }).toThrow("can't peek in an empty stack");
    });

    it('when populated', function() {
      s.push('a');
      s.push('b');
      expect(s.peek()).toBe('b');
    });
  });

  describe('#clear', function() {
    it('when empty', function() {
      expect(function() {
        s.clear();
      }).toThrow("can't clear an empty stack");
    });

    it('when populated', function() {
      s.push('a');
      s.push('b');
      s.push('c');
      s.clear();
      expect(s.toString()).toEqual('');
    });
  });

  describe('#size', function() {
    it('starts off at zero', function() {
      expect(s.size()).toBe(0);
    });

    it('pushing increments', function() {
      s.push('a');
      expect(s.size()).toBe(1);
    });

    it('popping decrements', function() {
      s.push('a');
      s.pop('b');
      expect(s.size()).toBe(0);
    });

    it('clearing resets', function() {
      s.push('a');
      s.push('b');
      s.push('c');
      s.clear();
      expect(s.size()).toBe(0);
    });
  });
});
