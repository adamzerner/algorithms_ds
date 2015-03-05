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