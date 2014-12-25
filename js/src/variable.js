

exports.variable = function (name) {
	this.name = name;
};

exports.variable.prototype.toString = function () {
	return this.name.toString();
};
