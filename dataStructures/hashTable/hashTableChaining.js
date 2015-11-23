function HashTableChaining() {
	this.data = new Array(26);
}

HashTableChaining.prototype._hash = function(key) {
	return key.charCodeAt(0) - 97;
};

HashTableChaining.prototype.insert = function(key, value) {
	var index = this._hash(key);
	if (!this.data[index]) {
		this.data[index] = new LinkedList();
	}
	this.data[index].push({ key: key, value: value });
};

HashTableChaining.prototype.find = function(key) {
	var index = this._hash(key);
	return this.data[index]._findByKey(key).value;
};

HashTableChaining.prototype.remove = function(key) {
	var index = this._hash(key);
	this.data[index]._removeByKey(key);
};
