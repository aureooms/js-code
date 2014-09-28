

exports.declaration = function (names) {
	this.names = names;
};

exports.declaration.prototype.toString = function () {
	var str = "";
	str += "var ";

	this.names.forEach(function (name, i, names) {
		str += name.toString();
		if (i < names.length - 1) {
			str += ", ";
		}
	});

	str += ";"

	return str;
};
