

exports.elseif = function (cond, statements) {
	this.cond = cond;
	this.statements = statements;
};

exports.elseif.prototype.toString = function () {
	var str = "";

	str += "else if (";
	str += this.cond.toString();
	str += ") {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};
