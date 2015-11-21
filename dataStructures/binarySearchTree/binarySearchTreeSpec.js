describe('BST', function() {
  var bst;

  beforeEach(function() {
    bst = new BST();
  });

  describe('#insert and #find', function() { // hard to decouple the two
    describe('when empty', function() {
      it("can't find an element when empty", function() {
        expect(bst.find(5)).toBe(false);
      });

      it('can insert and find an element', function() {
        bst.insert(5);
        expect(bst.find(5)).toBe(true);
      });

      it("can't find an element that isn't there after inserting", function() {
        bst.insert(5);
        expect(bst.find(10)).toBe(false);
      });
    });

    describe('with a root element', function() {
      beforeEach(function() {
        bst.insert(5);
      });

      it('can insert and find a smaller element', function() {
        bst.insert(3);
        expect(bst.find(3)).toBe(true);
      });

      it('can insert and find an equal element', function() {
        bst.insert(3);
        expect(bst.find(3)).toBe(true);
      });

      it('can insert and find a larger element', function() {
        bst.insert(7)
        expect(bst.find(7)).toBe(true);
      });

      it("can't find an element that isn't there", function() {
        expect(bst.find(10)).toBe(false);
      });
    });

    describe('root-left', function() {
      /*
                      5
                    3
      */
      beforeEach(function() {
        bst.insert(5);
        bst.insert(3);
      });

      describe('can insert and find an element', function() {
        it('larger than the root', function() {
          bst.insert(6);
          expect(bst.find(6)).toBe(true);
        });

        it('equal to the root', function() {
          bst.insert(5);
          expect(bst.find(5)).toBe(true);
        });

        it('between the root and the left child', function() {
          bst.insert(4);
          expect(bst.find(4)).toBe(true);
        });

        it('equal to the left child', function() {
          bst.insert(3);
          expect(bst.find(3)).toBe(true);
        });

        it('less than the left child', function() {
          bst.insert(2);
          expect(bst.find(2)).toBe(true);
        });
      });
    });

    describe('root-right', function() {
      /*
                      5
                        7
      */
      beforeEach(function() {
        bst.insert(5);
        bst.insert(7);
      });

      describe('can insert and find an element', function() {
        it('less than the root', function() {
          bst.insert(4);
          expect(bst.find(4)).toBe(true);
        });

        it('equal to the root', function() {
          bst.insert(5);
          expect(bst.find(5)).toBe(true);
        });

        it('between the root and the right child', function() {
          bst.insert(6);
          expect(bst.find(6)).toBe(true);
        });

        it('equal to the right child', function() {
          bst.insert(7);
          expect(bst.find(7)).toBe(true);
        });

        it('greater than the right child', function() {
          bst.insert(8);
          expect(bst.find(8)).toBe(true);
        });
      });
    });
  });

  describe('traversal', function() {
    /*
                    4
                  2   6
                1  3 5  7
    */
    beforeEach(function() {
      spy = jasmine.createSpy();
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);
    });

    describe('breadth first', function() {
      it('#levelorder', function() {
        bst.levelorder(spy);
        expect(spy.calls[0].args[0]).toBe(4);
        expect(spy.calls[1].args[0]).toBe(2);
        expect(spy.calls[2].args[0]).toBe(6);
        expect(spy.calls[3].args[0]).toBe(1);
        expect(spy.calls[4].args[0]).toBe(3);
        expect(spy.calls[5].args[0]).toBe(5);
        expect(spy.calls[6].args[0]).toBe(7);
      });
    })

    describe('depth first', function() {
      // root-left-right
      it('#preorder', function() {
        bst.preorder(spy);
        expect(spy.calls[0].args[0]).toBe(4);
        expect(spy.calls[1].args[0]).toBe(2);
        expect(spy.calls[2].args[0]).toBe(1);
        expect(spy.calls[3].args[0]).toBe(3);
        expect(spy.calls[4].args[0]).toBe(6);
        expect(spy.calls[5].args[0]).toBe(5);
        expect(spy.calls[6].args[0]).toBe(7);
      });

      // left-root-right
      it('#inorder', function() {
        bst.inorder(spy);
        expect(spy.calls[0].args[0]).toBe(1);
        expect(spy.calls[1].args[0]).toBe(2);
        expect(spy.calls[2].args[0]).toBe(3);
        expect(spy.calls[3].args[0]).toBe(4);
        expect(spy.calls[4].args[0]).toBe(5);
        expect(spy.calls[5].args[0]).toBe(6);
        expect(spy.calls[6].args[0]).toBe(7);
      });

      // left-right-root
      it('#postorder', function() {
        bst.postorder(spy);
        expect(spy.calls[0].args[0]).toBe(1);
        expect(spy.calls[1].args[0]).toBe(3);
        expect(spy.calls[2].args[0]).toBe(2);
        expect(spy.calls[3].args[0]).toBe(5);
        expect(spy.calls[4].args[0]).toBe(7);
        expect(spy.calls[5].args[0]).toBe(6);
        expect(spy.calls[6].args[0]).toBe(4);
      });
    });
  });

  describe('other', function() {
    /*
                    4
                  2   6
                1  3 5  7
    */
    beforeEach(function() {
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(3);
      bst.insert(5);
      bst.insert(7);
    });

    it('#min', function() {
      expect(bst.min()).toBe(1);
    });

    it('#max', function() {
      expect(bst.max()).toBe(7);
    });

    it('#height', function() {
      expect(bst.height()).toBe(3);
    });
  });

  describe('#remove', function() {
    /*
              4
            2   6
          1    5  7
    */
    beforeEach(function() {
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(5);
      bst.insert(7);
    });

    it("can't remove an element that doesn't exist", function() {
      expect(bst.remove(10)).toBe(false);
    });

    it('can remove a leaf node', function() {
      expect(bst.remove(1)).toBe(1);
      expect(bst.find(1)).toBe(false);
    });

    it('can remove a node with one child', function() {
      expect(bst.remove(2)).toBe(2);
      expect(bst.find(2)).toBe(false);
    });

    describe('can remove a node with two children', function() {
      it('when the right subtree minimum is the root', function() {
        expect(bst.remove(6)).toBe(6);
        expect(bst.find(6)).toBe(false);
      });

      it('when the right subtree minimum is on the left', function() {
        bst.insert(6.5);
        expect(bst.remove(6)).toBe(6);
        expect(bst.find(6)).toBe(false);
      });
    });

    describe('can deal with the root node', function() {
      it('with zero children', function() {
        bst = new BST();
        bst.insert(1);
        expect(bst.remove(1)).toBe(1);
        expect(bst.find(1)).toBe(false);
      });

      it('with one child', function() {
        bst = new BST();
        bst.insert(1);
        bst.insert(2);
        expect(bst.remove(1)).toBe(1);
        expect(bst.find(1)).toBe(false);
      });

      it('with two children', function() {
        bst = new BST();
        bst.insert(1);
        bst.insert(0);
        bst.insert(2);
        expect(bst.remove(1)).toBe(1);
        expect(bst.find(1)).toBe(false);
      });
    });
  });

  describe('#isBst', function() {
    /*
              3
            2   5
          1  4
    */
    it('invalid bst', function() {
      bst.insert(3);
      bst.insert(2);
      bst.insert(5);
      bst.insert(1);
      bst.root.left.right = { el: 4, left: null, right: null };
      expect(bst.isBst()).toBe(false);
    });

    /*
              4
            2   6
          1    5  7
    */
    it('valid bst', function() {
      bst.insert(4);
      bst.insert(2);
      bst.insert(6);
      bst.insert(1);
      bst.insert(5);
      bst.insert(7);
      expect(bst.isBst()).toBe(true);
    });
  });
});
