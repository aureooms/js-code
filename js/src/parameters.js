

exports.parameters = function (parameters) {
	this.parameters = parameters;
};

exports.parameters.prototype.toString = function () {
	var str = "";

	this.parameters.forEach(function (parameter, i, parameters) {
		str += parameter.toString();
		if (i < parameters.length - 1) {
			str += ", ";
		}
	});

	return str;
};
