/*
- push
- pop
- toString
- unshift
- shift
- read
- clear
- indexOf
- size
- insert
- remove
*/

var implementations = [{
  type: 'Array',
  constructor: List
}, {
  type: 'Linked List',
  constructor: LinkedList
}, {
  type: 'Doubly Linked List',
  constructor: DoublyLinkedList
}];

implementations.forEach(function(implementation) {
  describe('List: ' + implementation.type + ' implementation', function() {
    var l;

    beforeEach(function() {
      l = new implementation.constructor();
    });

    describe('#toString', function() {
      it('when empty', function() {
        expect(l.toString()).toBe('');
      });

      it('with one element', function() {
        l.push('a');
        expect(l.toString()).toBe('a');
      });

      it('with multiple elements', function() {
        l.push('a');
        l.push('b');
        expect(l.toString()).toBe('a, b');
      });
    });

    describe('#push', function() {
      it('when empty', function() {
        l.push('a');
        expect(l.toString()).toBe('a');
      });

      it('when populated', function() {
        l.push('a');
        l.push('b');
        expect(l.toString()).toBe('a, b');
      });
    });

    describe('#pop', function() {
      it('when empty', function() {
        expect(function() {
          l.pop()
        }).toThrow("an empty list can't pop");
      });

      it('when populated', function() {
        l.push('a');
        l.push('b');
        var ret = l.pop();
        expect(ret).toBe('b');
        expect(l.toString()).toBe('a');
      });
    });

    describe('#unshift', function() {
      it('when empty', function() {
        l.unshift('a');
        expect(l.toString()).toBe('a');
      });

      it('when populated', function() {
        l.push('b')
        l.unshift('a');
        expect(l.toString()).toBe('a, b');
      });
    });

    describe('#shift', function() {
      it('when empty', function() {
        expect(function() {
          l.shift()
        }).toThrow("an empty list can't shift");
      });

      it('when populated', function() {
        l.push('a');
        l.push('b');
        var ret = l.shift();
        expect(ret).toBe('a');
        expect(l.toString()).toBe('b');
      });
    });

    describe('#read', function() {
      it('invalid index', function() {
        expect(l.read(1)).toBe(undefined);
      });

      it('valid index', function() {
        l.push('a');
        expect(l.read(0)).toBe('a');
      });
    });

    describe('#clear', function() {
      it('when empty', function() {
        expect(function() {
          l.clear();
        }).toThrow("an empty list can't clear");
      });

      it('when populated', function() {
        l.push('a');
        l.push('b');
        l.push('c');
        l.clear();
        expect(l.toString()).toBe('');
      });
    });

    describe('#indexOf', function() {
      it('invalid element', function() {
        expect(l.indexOf('a')).toBe(-1);
      });

      it('with one element', function() {
        l.push('a');
        expect(l.indexOf('a')).toBe(0);
      });

      it('with multiple elements', function() {
        l.push('a');
        l.push('b');
        expect(l.indexOf('b')).toBe(1);
      });
    });

    describe('#size', function() {
      it('starts off at zero', function() {
        expect(l.size()).toBe(0);
      });

      it('pushing increments', function() {
        l.push('a');
        expect(l.size()).toBe(1);
      });

      it('popping decrements', function() {
        l.push('a');
        l.pop();
        expect(l.size()).toBe(0);
      });

      it('unshifting increments', function() {
        l.unshift('a');
        expect(l.size()).toBe(1);
      });

      it('shifting decrements', function() {
        l.push('a');
        l.shift();
        expect(l.size()).toBe(0);
      });

      it('clearing resets', function() {
        l.push('a');
        l.push('b');
        l.push('c');
        l.clear();
        expect(l.size()).toBe(0);
      });

      it('inserting increments', function() {
        l.insert('a', 0);
        expect(l.size()).toBe(1);
      });

      it('removing one decrements by one', function() {
        l.push('a');
        l.remove(0);
        expect(l.size()).toBe(0);
      });

      it('removing two decrements by two', function() {
        l.push('a');
        l.push('b');
        l.push('c');
        l.remove(1, 2);
        expect(l.size()).toBe(1);
      });
    });

    describe('#insert', function() {
      it("can't insert at an invald index", function() {
        expect(function() {
          l.insert('a', 1);
        }).toThrow("can't insert at an invalid index");
      });

      it('can initialize with insert', function() {
        l.insert('a', 0);
        expect(l.toString()).toBe('a');
      });

      it('can insert in front', function() {
        l.push('b');
        l.insert('a', 0);
        expect(l.toString()).toBe('a, b');
      });

      it('can insert at end', function() {
        l.push('a');
        l.insert('b', 1);
        expect(l.toString()).toBe('a, b');
      });

      it('can insert in the middle', function() {
        l.push('a');
        l.push('c');
        l.insert('b', 1);
        expect(l.toString()).toBe('a, b, c');
      });
    });

    describe('#remove', function() {
      it('when empty', function() {
        expect(function() {
          l.remove(10)
        }).toThrow("can't remove from an empty list");
      });

      it('when element doesn\'t exist', function() {
        l.push('a');

        expect(function() {
          l.remove(1);
        }).toThrow("can't remove an element that doesn't exist");

        expect(function() {
          l.remove(1, 2);
        }).toThrow("can't remove an element that doesn't exist");
      });

      describe('one element', function() {
        beforeEach(function() {
          l.push('a');
          l.push('b');
          l.push('c');
        });

        it('in the front', function() {
          var returnedElement = l.remove(0);
          expect(returnedElement).toBe('a');
          expect(l.toString()).toBe('b, c');
        });

        it('in the middle', function() {
          var returnedElement = l.remove(1);
          expect(returnedElement).toBe('b');
          expect(l.toString()).toBe('a, c');
        });

        it('at the end', function() {
          var returnedElement = l.remove(1);
          expect(returnedElement).toBe('b');
          expect(l.toString()).toBe('a, c');
        });
      });

      describe('multiple elements', function() {
        beforeEach(function() {
          l.push('a');
          l.push('b');
          l.push('c');
          l.push('d');
        });

        it('in the front', function() {
          var returnedElements = l.remove(0,1);
          expect(returnedElements).toEqual(['a', 'b']);
          expect(l.toString()).toBe('c, d');
        });

        it('in the middle', function() {
          var returnedElements = l.remove(1,2);
          expect(returnedElements).toEqual(['b', 'c']);
          expect(l.toString()).toBe('a, d');
        });

        it('at the end', function() {
          var returnedElements = l.remove(2,3);
          expect(returnedElements).toEqual(['c', 'd']);
          expect(l.toString()).toBe('a, b');
        });
      });
    });
  });
});
