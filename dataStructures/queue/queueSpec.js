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
    expect(q.toString()).toEqual('a, b');
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
    expect(firstDequeue).toBe('a');
    expect(secondDequeue).toBe('b');
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
    expect(q.peek()).toBe('a');
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
    expect(ret).toBe('a, b, c');
  });
});