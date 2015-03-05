function Hash() {
	this.arr = [];
}
Hash.prototype._hash = function(key) {
	return key.charCodeAt(0) - 96;
};
Hash.prototype.get = function(key) {
	var index = this._hash(key);
	var linkedlist = this.arr[index];
	if (!linkedlist) return undefined;
	else {
		var curr = linkedlist.head.next;
		while (curr) {
			if (curr.val.key === key) return curr.val.val;
			curr = curr.next;
		}
	}
	return undefined;
};
Hash.prototype.set = function(key, val) {
	var index = this._hash(key);
	if (!this.arr[index]) this.arr[index] = new LinkedList();
	var linkedlist = this.arr[index];
	if (linkedlist._isEmpty()) linkedlist.push({key: key, val: val});
	else {
		var curr = linkedlist.head.next;
		while (curr) {
			if (curr.val.key === key) {
				curr.val.val = val;
				return;
			}
			curr = curr.next;
		}
		linkedlist.push({key: key, val: val});
	}
};