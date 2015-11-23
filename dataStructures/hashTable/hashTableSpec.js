var implementations = [/*{
  type: 'Chaining',
  constructor: HashTableChaining
},*/ {
  type: 'Linear Probing',
  constructor: HashTableLinearProbing
}];

implementations.forEach(function(implementation) {
  describe(implementation.type, function() {
    var hashTable;

    beforeEach(function() {
      hashTable = new implementation.constructor();
    });

    it('hashes using the first character of the key', function() {
      expect(hashTable._hash('adam')).toBe(0);
      expect(hashTable._hash('alex')).toBe(0);
      expect(hashTable._hash('brett')).toBe(1);
    });

    describe('without collisions', function() {
      it('can insert and find', function() { // hard to decouple the two
        hashTable.insert('adam', 'adam@gmail.com');
        hashTable.insert('brett', 'brett@gmail.com');

        expect(hashTable.find('adam')).toBe('adam@gmail.com');
        expect(hashTable.find('brett')).toBe('brett@gmail.com');
      });

      it('can remove', function() {
        hashTable.insert('adam', 'adam@gmail.com');
        hashTable.remove('adam');
        expect(hashTable.find('adam')).toBe(undefined);
      });
    });

    if (implementation.type === 'Chaining') {
      describe('with collisions: chaining', function() {
        it('can insert and find', function() {
          hashTable.insert('corey', 'corey@gmail.com');
          hashTable.insert('chad', 'chad@gmail.com');
          hashTable.insert('dylan', 'dylan@gmail.com');

          expect(hashTable.find('corey')).toBe('corey@gmail.com');
          expect(hashTable.find('chad')).toBe('chad@gmail.com');
          expect(hashTable.find('dylan')).toBe('dylan@gmail.com');

          expect(hashTable.data[2] instanceof LinkedList).toBe(true);
          expect(hashTable.data[3] instanceof LinkedList).toBe(true);
        });

        it('can remove', function() {
          hashTable.insert('adam', 'adam@gmail.com');
          hashTable.insert('alex', 'alex@gmail.com');
          hashTable.remove('adam');
          expect(hashTable.find('adam')).toBe(undefined);
          expect(hashTable.find('alex')).toBe('alex@gmail.com');
        });
      });
    }

    else if (implementation.type === 'Linear Probing') {
      describe('with collisions: linear probing', function() {
        it('can insert and find', function() {
          hashTable.insert('corey', 'corey@gmail.com');
          hashTable.insert('chad', 'chad@gmail.com');
          hashTable.insert('dylan', 'dylan@gmail.com');

          expect(hashTable.find('corey')).toBe('corey@gmail.com');
          expect(hashTable.find('chad')).toBe('chad@gmail.com');
          expect(hashTable.find('dylan')).toBe('dylan@gmail.com');

          expect(hashTable.data[2]).toEqual({ key: 'corey', value: 'corey@gmail.com' });
          expect(hashTable.data[3]).toEqual({ key: 'chad', value: 'chad@gmail.com' });
          expect(hashTable.data[4]).toEqual({ key: 'dylan', value: 'dylan@gmail.com' });
        });

        it('can remove', function() {
          hashTable.insert('adam', 'adam@gmail.com');
          hashTable.insert('alex', 'alex@gmail.com');
          hashTable.remove('adam');
          expect(hashTable.find('adam')).toBe(undefined);
          expect(hashTable.find('alex')).toBe('alex@gmail.com');
        });
      });
    }

  });
});
