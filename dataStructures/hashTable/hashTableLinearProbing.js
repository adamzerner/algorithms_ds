function HashTableLinearProbing() {
	this.data = new Array(26);
}

HashTableLinearProbing.prototype._hash = function(key) {
	return key.charCodeAt(0) - 97;
};

HashTableLinearProbing.prototype.insert = function(key, value) {
	var index = this._hash(key);

	if (!this.data[index]) {
		this.data[index] = { key: key, value: value };
		return;
	}

	index++;
	for (var len = this.data.length; index < len; index++) {
		if (!this.data[index]) {
			this.data[index] = { key: key, value: value };
			return;
		}
	}
};

HashTableLinearProbing.prototype.find = function(key) {
	var index = this._hash(key);

	for (var len = this.data.length; index < len; index++) {
		if (this.data[index] && this.data[index].key === key) {
			return this.data[index].value;
		}
	}
};

HashTableLinearProbing.prototype.remove = function(key) {
	var index = this._hash(key);

	for (var len = this.data.length; index < len; index++) {
		if (this.data[index] && this.data[index].key === key) {
			this.data[index] = null;
		}
	}
};
