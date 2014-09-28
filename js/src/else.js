

exports.else = function (statements) {
	this.statements = statements;
};

exports.else.prototype.toString = function () {
	var str = "";

	str += "else {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};
