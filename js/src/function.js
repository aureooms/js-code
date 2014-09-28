

exports.function = function (name, parameters, statements) {
	this.name = name;
	this.parameters = parameters;
	this.statements = statements;
};

exports.function.prototype.toString = function () {
	var str = "";

	str += "function "
	if (this.name !== null) {
		str += this.name.toString();
	}
	str += "(";

	str += this.parameters.toString();

	str += ") {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};
