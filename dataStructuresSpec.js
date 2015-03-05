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
