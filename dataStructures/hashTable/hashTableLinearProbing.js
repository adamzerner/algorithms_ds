function HashTableLinearProbing() {
	this.data = new Array(26);
}

HashTableLinearProbing.prototype._hash = function(key) {
	return key.charCodeAt(0) - 97;
};

HashTableLinearProbing.prototype.insert = function(key, value) {
	var index = this._hash(key);

	for (var i = index, len = this.data.length; i < len; i++) {
		if (!this.data[i]) {
			this.data[i] = { key: key, value: value };
			break;
		}
	}
};

HashTableLinearProbing.prototype.find = function(key) {
	var index = this._hash(key);

	for (var i = index, len = this.data.length; i < len; i++) {
		if (this.data[i] && this.data[i].key === key) {
			return this.data[i].value;
		}
	}
};

HashTableLinearProbing.prototype.remove = function(key) {
	var index = this._hash(key);
	
	for (var i = index, len = this.data.length; i < len; i++) {
		if (this.data[i] && this.data[i].key === key) {
			this.data[i] = null;
		}
	}
};
