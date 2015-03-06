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
  it("resizes", function() {
    // should double if there's not enough room
    // should cut in half if 25% full after pop
    expect(s.data.length).toBe(5);
    s.push('a');
    s.push('b');
    s.push('c');
    s.push('d');
    s.push('e');
    s.push('f');
    expect(s.data.length).toBe(10);
    expect(s.data[5]).toBe('f');
    s.pop();
    s.pop();
    s.pop();
    expect(s.data.length).toBe(5);
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