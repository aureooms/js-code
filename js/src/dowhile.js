

exports.dowhile = function (cond, statements) {
	this.cond = cond;
	this.statements = statements;
};

exports.dowhile.prototype.toString = function () {
	var str = "";

	str += "do {\n";

	str += this.statements.toString();

	str += "} while (";
	if (this.cond !== null) {
		str += this.cond.toString();
	}
	str += ");\n";
	return str;
};
