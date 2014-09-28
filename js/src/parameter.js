

exports.parameter = function (name) {
	this.name = name;
};

exports.parameter.prototype.toString = function () {
	return this.name.toString();
};
