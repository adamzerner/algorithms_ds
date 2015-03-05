// UNION-FIND
function UF(n) {
	this.arr = new Array(n); // could do [] in javascript
	for (var i = 0; i < n; i++) {
		this.arr[i] = i;
	}
}
UF.prototype.union = function(i, j) {
	var iVal = this.arr[i];
	var jVal = this.arr[j];
	for (var i = 0, len = this.arr.length; i < len; i++) {
		if (this.arr[i] === iVal) this.arr[i] = jVal;
	}
};
UF.prototype.connected = function(i, j) {
	return this.arr[i] === this.arr[j];
};

function UF2(n) {
	UF.call(this, n);
}
UF2.prototype.root = function(i) {
	while (i !== this.arr[i]) { // not a root
		i = this.arr[i]; // i = its parent
	}
	return i;
};
UF2.prototype.union = function(i, j) {
	var iRoot = this.root(i);
	var jRoot = this.root(j);
	this.arr[iRoot] = jRoot;
};
UF2.prototype.connected = function(i, j) {
	return this.root(i) === this.root(j);
};

function UF3(n) {
	UF.call(this, n);
	this.sz = new Array(n);
	for (var i = 0; i < n; i++) {
		this.sz[i] = 1;
	}
}
UF3.prototype = Object.create(UF2.prototype);
UF3.prototype.union = function(i, j) {
	var iRoot = this.root(i);
	var jRoot = this.root(j);
	if (iRoot === jRoot) return;
	if (this.sz[iRoot] < this.sz[jRoot]) {
		this.arr[iRoot] = jRoot;
		this.sz[jRoot] += this.sz[iRoot];
	}
	else {
		this.arr[jRoot] = iRoot;
		this.sz[iRoot] += this.sz[jRoot];
	}
};
UF3.prototype.rootOnePass = function(i) {
	while (i !== this.arr[i]) {
		this.arr[i] = this.arr[this.arr[i]];
		i = this.arr[i];
	}
	return i;
};
UF3.prototype.rootTwoPass = function(i) {
	var passed = [];
	while (i !== this.arr[i]) {
		passed.push(i);
		i = this.arr[i];
	}
	var currPassed;
	for (var j = 0, len = passed.length; j < len; j++) {
		currPassed = passed[j];
		this.arr[currPassed] = i;
	}
	return i;
};

// RPN Calculator (Dijkstra's Algorithm)
function rpnCalculator(expression) {
	var values = [];
	var operands = [];
	expression = expression.split('');
	for (var i = 0, len = expression.length; i < len; i++) {
		if (expression[i] === '(') continue;
		else if (isOperand(expression[i])) operands.push(expression[i]);
		else if (isNumber(expression[i])) values.push(expression[i]);
		else if (expression[i] === ')') {
			var top = values.pop();
			var underTop = values.pop();
			var op = operands.pop();
			var result = getResult(underTop, top, op);
			values.push(result);
		}
	}
	return values.pop();
}
function isOperand(arg) {
	var operands = ['+', '-', '*', '/'];
	return operands.indexOf(arg) !== -1;
}
function isNumber(arg) {
	return !isNaN(+arg);
}
function getResult(a, b, op) {
	a = Number(a);
	b = Number(b);
	if (op === '+') return a + b;
	else if (op === '-') return a - b;
	else if (op === '*') return a * b;
	else if (op === '/') return a / b;
}