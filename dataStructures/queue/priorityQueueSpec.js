xdescribe('A Priority Queue', function() {
  var pq;
  beforeEach(function() {
    pq = new PriorityQueue;
    pq.insert('t');
    pq.insert('p');
    pq.insert('r');
    pq.insert('n');
    pq.insert('h');
    pq.insert('o');
    pq.insert('a');
    pq.insert('e');
    pq.insert('i');
    pq.insert('g');
    /*
                T
              /   \
             P     R
            / \   / \
           N   H O   A
          /|  /
         E I G
    */
  });
  it('can insert', function() {
    pq.insert('s');
    expect(pq.pq[2]).toBe('s');
    expect(pq.pq[5]).toBe('p');
    expect(pq.pq[11]).toBe('h');
  });
  it('can delMax', function() {
    var oldMax = pq.delMax();
    expect(oldMax).toBe('t');
    expect(pq.pq[1]).toBe('s');
    expect(pq.pq[2]).toBe('p');
    expect(pq.pq[5]).toBe('h');
  });
});
