// good resource - https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P

describe('A Stack', function() {
  var s;
  beforeEach(function() {
    s = new Stack();
  });
  it("can push", function() {
    s.push('a');
    expect(s.toString()).toEqual('a');
  });
  it("can push in order", function() {
    s.push('a');
    s.push('b');
    expect(s.toString()).toEqual('a, b');
  });
  it("can pop", function() {
    expect(function() {
      s.pop()
    }).toThrow("an empty stack can't pop");
    s.push('a');
    var ret = s.pop();
    expect(ret).toBe('a');
    expect(s.toString()).toEqual('');
  });
  it("can pop in order", function() {
    s.push('a');
    s.push('b');
    var firstPop = s.pop();
    var secondPop = s.pop();
    expect(firstPop).toBe('b');
    expect(secondPop).toBe('a');
  });
  it("can size", function() {
    expect(s.size()).toBe(0);
    s.push('a');
    expect(s.size()).toBe(1);
    s.pop('b');
    expect(s.size()).toBe(0);
  });
  it('can peek', function() {
    s.push('a');
    s.push('b');
    expect(s.peek()).toBe('b');
  });
  it('can clear', function() {
    s.push('a');
    s.push('b');
    s.push('c');
    s.clear();
    expect(s.toString()).toEqual('');
  });
  it('can toString', function() {
    s.push('a');
    s.push('b');
    s.push('c');
    var retStr = s.toString();
    expect(retStr).toBe('a, b, c');
  });
});

describe('A Queue', function() {
  var q;
  beforeEach(function() {
    q = new Queue();
  });
  it('can enqueue', function() {
    q.enqueue('a');
    expect(q.toString()).toEqual('a');
  });
  it('can enqueue in order', function() {
    q.enqueue('a');
    q.enqueue('b');
    expect(q.toString()).toEqual('b, a');
  });
  it('can dequeue', function() {
    expect(function() {
      q.dequeue()
    }).toThrow("an empty queue can't dequeue");
    q.enqueue('a');
    var ret = q.dequeue();
    expect(ret).toBe('a');
    expect(q.toString()).toEqual('');
  });
  it('can dequeue in order', function() {
    q.enqueue('a');
    q.enqueue('b');
    var firstDequeue = q.dequeue();
    var secondDequeue = q.dequeue();
    expect(firstDequeue).toBe('b');
    expect(secondDequeue).toBe('a');
  });
  it('can size', function() {
    expect(q.size()).toBe(0);
    q.enqueue('a');
    expect(q.size()).toBe(1);
    q.dequeue();
    expect(q.size()).toBe(0);
  });
  it('can peek', function() {
    q.enqueue('a');
    q.enqueue('b');
    expect(q.peek()).toBe('b');
  });
  it('can clear', function() {
    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    q.clear();
    expect(q.toString()).toEqual('');
  });
  it('can toString', function() {
    q.enqueue('a');
    q.enqueue('b');
    q.enqueue('c');
    var ret = q.toString();
    expect(ret).toBe('c, b, a');
  });
});

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

describe('A Linked List', function() {
  var l;
  beforeEach(function() {
    l = new LinkedList();
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
    }).toThrow("can't pop from an empty linked list");
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
    }).toThrow("can't shift from an empty linked list"); // zero elements
    l.push('a');
    var ret = l.shift();
    expect(ret).toBe('a'); // one element
    l.push('b');
    l.push('c');
    ret = l.shift();
    // expect(ret).toBe('b'); // two elements
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

describe('A Binary Search Tree', function() {
  var bst, empty;
  beforeEach(function() {
    jasmine.addMatchers({
      toBeABSTNode: function () {
        return {
          compare: function(actual, expected) {
            var result = {};
            result.pass = actual.val !== undefined && actual.left !== undefined && actual.right !== undefined;
            result.message = "Expected " + actual + " to be a BSTNode";
            return result;
          }
        };
      }
    });
    empty = new BST();
    bst = new BST();
    bst.insert(4);
    bst.insert(2);
    bst.insert(1);
    bst.insert(3);
    bst.insert(6);
    bst.insert(5);
    bst.insert(7);
    //       4
    //   2       6
    // 1   3   5   7
  });
  it('can do preorder traversal', function() {
    expect(empty.preorder()).toBe('');
    expect(bst.preorder()).toBe('4213657');
  });
  it('can do inorder traversal', function() {
    expect(empty.inorder()).toBe('');
    expect(bst.inorder()).toBe('1234567');
  });
  it('can do postorder traversal', function() {
    expect(empty.postorder()).toBe('');
    expect(bst.postorder()).toBe('1325764');
  });
  it('can do levelorder traversal', function() {
    expect(empty.levelorder()).toBe('');
    expect(bst.levelorder()).toBe('4261357');
  });
  it('can get the minimum', function() {
    expect(function() {
      empty.min();
    }).toThrow('an empty tree has no min');
    expect(bst.min()).toBeABSTNode();
    expect(bst.min().val).toBe(1);
  });
  it('can get the maximum', function() {
    expect(function() {
      empty.max();
    }).toThrow('an empty tree has no max');
    expect(bst.max()).toBeABSTNode();
    expect(bst.max().val).toBe(7);
  });
  it('can find', function() {
    expect(function() {
      empty.find(10);
    }).toThrow("an empty tree can't find");
    expect(bst.find(5)).toBeABSTNode();
    expect(bst.find(5).val).toBe(5);
    expect(bst.find(10)).toBe(-1);
  });
  it('can findParent', function() {
    expect(bst.findParent(5)).toBeABSTNode();
    expect(bst.findParent(5).val).toBe(6);
    expect(bst.findParent(8)).toBe(false); // nonexistant node
    expect(bst.findParent(4)).toBe(false); // root
    expect(empty.findParent(4)).toBe(false);
  });
  describe('can remove', function() {
    it('throws an error if empty', function() {
      expect(function() {
        empty.remove(10);
      }).toThrow("an empty tree can't remove");
    });
    it('throws an error if not found', function() {
      expect(function() {
        bst.remove(10);
      }).toThrow("can't remove nonexistant element");
    });
    it('a leaf node', function() {
      bst.remove(7);
      expect(bst.inorder()).toBe('123456');
    });
    it('a node with one child', function() {
      bst.insert(8);
      bst.remove(7);
      expect(bst.inorder()).toBe('1234568');
    });
    it('a node with two children', function() {
      bst.insert(2.1);
      bst.remove(2);
      expect(bst.inorder()).toBe('12.134567'); // right subtree has a left subtree
      bst.insert(8);
      bst.remove(6);
      expect(bst.inorder()).toBe('12.134578'); // right subtree doesn't have a left subtree
    });
    // the root node
    // add AVL stuff
  });
});

describe('A Hash Table', function() {
  // hash fn uses the number associated with the first letter (eg. a: 1, b: 2...)
  var h;
  beforeEach(function() {
    h = new Hash();
    h.set('adam', 'me');
    h.set('jake', 'brother');
  });
  it('can get and set', function() {
    expect(h.get('adam')).toBe('me');
    expect(h.get('jake')).toBe('brother');
    expect(h.get('lori')).toBe(undefined);
  });
  it('can handle collisions', function() {
    h.set('alfred', 'grandpa');
    expect(h.get('alfred')).toBe('grandpa');
  });
  it('can overwrite', function() {
    h.set('adam', 'overwritten');
    expect(h.get('adam')).toBe('overwritten');
  });
  // table resizing
  // linear probing
});

// describe("A Binary Heap", function() {
//   var heap;
//   var input = [16,14,10,8,7,9,3,2,4,1];
//   beforeEach(function() {
//     heap = new Heap(input);
//   });
//   it('can get parent', function() {
//     expect(heap.parent(5)).toBe(14);
//   });
// });

// graph
