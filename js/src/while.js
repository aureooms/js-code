

exports.while = function (cond, statements) {
	this.cond = cond;
	this.statements = statements;
};

exports.while.prototype.toString = function () {
	var str = "";

	str += "while (";
	if (this.cond !== null) {
		str += this.cond.toString();
	}
	str += ") {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};
