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
