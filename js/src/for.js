

exports.for = function (pre, cond, inc, statements) {
	this.pre = pre;
	this.cond = cond;
	this.inc = inc;
	this.statements = statements;
};

exports.for.prototype.toString = function () {
	var str = "";

	str += "for (";
	if (this.pre !== null) {
		str += this.pre.toString();
	}
	str += ";";
	if (this.cond !== null) {
		str += " " + this.cond.toString();
	}
	str += ";";
	if (this.inc !== null) {
		str += " " + this.inc.toString();
	}
	str += ") {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};
