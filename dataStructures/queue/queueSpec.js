/*

INTERFACE:
- toString
- enqueue
- dequeue
- front
- clear
- size

*/

var implementations = [{
  type: 'Array',
  constructor: QueueArray
} /*, {
  type: 'Linked List',
  constructor: QueueLinkedList
}*/];

implementations.forEach(function(implementation) {
  describe('Queue: ' + implementation.type + ' implementation', function() {
    var q;

    beforeEach(function() {
      q = new implementation.constructor();
    });

    describe('#toString', function() {
      it('when empty', function() {
        expect(q.toString()).toBe('');
      });

      it('with one element', function() {
        q.enqueue('a');
        expect(q.toString()).toBe('a');
      });

      it('with multiple elements', function() {
        q.enqueue('a');
        q.enqueue('b');
        expect(q.toString()).toBe('ab');
      });
    });

    describe('#enqueue', function() {
      it('when empty', function() {
        q.enqueue('a');
        expect(q.toString()).toEqual('a');
      });

      it('when populated', function() {
        q.enqueue('a');
        q.enqueue('b');
        expect(q.toString()).toEqual('ab');
      });

      if (implementation.type === 'Array') {
        // note: your array has to a) be initialized to a length of 5 and b) be stored in the "data" property of your queue
        it('uses a circular array', function() {
          expect(q.data.length).toBe(5);

          q.enqueue('a');
          q.enqueue('b');
          q.enqueue('c');
          q.enqueue('d');
          q.enqueue('e');
          // | a | b | c | d | e |
          q.dequeue();
          // | - | b | c | d | e |
          q.enqueue('f');
          expect(q.data[0]).toBe('f');
          expect(q.data.length).toBe(5);
        });

        it('resizes', function() {
          expect(q.data.length).toBe(5);

          q.enqueue('a');
          q.enqueue('b');
          q.enqueue('c');
          q.enqueue('d');
          q.enqueue('e');
          // | a | b | c | d | e |

          q.enqueue('f');
          // | a | b | c | d | e | f | - | - | - | - |

          expect(q.data[5]).toBe('f');
          expect(q.data.length).toBe(10);
        });
      }
    });

    describe('#dequeue', function() {
      it('when empty', function() {
        expect(function() {
          q.dequeue()
        }).toThrow("an empty queue can't dequeue");
      });

      it('with one element', function() {
        q.enqueue('a');
        var ret = q.dequeue();
        expect(ret).toBe('a');
        expect(q.toString()).toBe('');
        q.enqueue('b');
        q.enqueue('c');
        expect(q.toString()).toBe('bc');
      });

      it('with multiple elements', function() {
        q.enqueue('a');
        q.enqueue('b');
        var ret = q.dequeue();
        expect(ret).toBe('a');
        expect(q.toString()).toBe('b');
      });

      if (implementation.type === 'Array') {
        // note: your array has to a) be initialized to a length of 5 and b) be stored in the "data" property of your queue
        it('resizes', function() {
          expect(q.data.length).toBe(5);

          debugger;
          q.enqueue('a');
          q.enqueue('b');
          q.enqueue('c');
          q.enqueue('d');
          q.enqueue('e');
          // | a | b | c | d | e |

          q.enqueue('f');
          // | a | b | c | d | e | f | - | - | - | - |

          q.dequeue();
          q.dequeue();
          q.dequeue();
          q.dequeue();
          // | a | b | - | - | - | - | - | - | - | - |
          // | a | b | - | - | - |

          expect(q.data.length).toBe(5);
        });
      }
    });

    describe('#front', function() {
      it('when empty', function() {
        expect(function() {
          q.front();
        }).toThrow("can't get the front of an empty queue");
      });

      it('when populated', function() {
        q.enqueue('a');
        q.enqueue('b');
        expect(q.front()).toBe('a');
      });
    });

    describe('#clear', function() {
      it('when empty', function() {
        expect(function() {
          q.clear();
        }).toThrow("can't clear an empty queue");
      });

      it('when populated', function() {
        q.enqueue('a');
        q.enqueue('b');
        q.enqueue('c');
        q.clear();
        expect(q.toString()).toEqual('');
      });
    })

    describe('#size', function() {
      it('starts off at zero', function() {
        expect(q.size()).toBe(0);
      });

      it('enqueue increments', function() {
        q.enqueue('a');
        expect(q.size()).toBe(1);
      });

      it('dequeue decrements', function() {
        q.enqueue('a');
        q.dequeue();
        expect(q.size()).toBe(0);
      });

      it('clearing resets', function() {
        q.enqueue('a');
        q.enqueue('b');
        q.enqueue('c');
        q.clear();
        expect(q.size()).toBe(0);
      });
    });
  });
});
