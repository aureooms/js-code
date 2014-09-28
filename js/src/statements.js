

exports.function = function (statements) {
	this.statements = statements;
};

exports.function.prototype.toString = function () {
	var str = "";

	this.statements.forEach(function (statement) {
		str += statement.toString() + "\n";
	});

	return str;
};
