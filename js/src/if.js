

exports.if = function (cond, statements) {
	this.cond = cond;
	this.statements = statements;
};

exports.if.prototype.toString = function () {
	var str = "";

	str += "if (";
	str += this.cond.toString();
	str += ") {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};
