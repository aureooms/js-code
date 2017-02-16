( function ( ) {

'use strict' ;

var definition = function ( exports , undefined ) {


/* js/src/add.js */
exports.add = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.add.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") + (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/brackets.js */
exports.brackets = function ( object , key ) {
	this.object = object ;
	this.key = key ;
} ;

exports.brackets.prototype.toString = function ( ) {
	return "(" + this.object.toString( ) + ")[" + this.key.toString( ) + "]" ;
} ;

/* js/src/declaration.js */


exports.declaration = function ( names ) {
	this.names = names ;
} ;

exports.declaration.prototype.toString = function ( ) {

	var str ;

	str = "var " ;

	this.names.forEach( function ( name , i , names ) {

		str += name.toString() ;

		if ( i < names.length - 1 ) {
			str += " , " ;
		}

	} ) ;

	str += " ;" ;

	return str ;

} ;

/* js/src/delete.js */
exports.delete = function ( expression ) {
	this.expression = expression ;
} ;

exports.delete.prototype.toString = function ( ) {
	return "delete (" + this.expression.toString( )  + ")" ;
} ;

/* js/src/div.js */
exports.div = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.div.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") / (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/dowhile.js */


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

/* js/src/else.js */


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

/* js/src/elseif.js */


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

/* js/src/for.js */


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

/* js/src/function.js */


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

/* js/src/iadd.js */
exports.iadd = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.iadd.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") += (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/idiv.js */
exports.idiv = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.idiv.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") /= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/if.js */


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

/* js/src/ilshift.js */
exports.ilshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.ilshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") <<= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/imod.js */
exports.imod = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.imod.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") %= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/imul.js */
exports.imul = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.imul.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") *= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/irshift.js */
exports.irshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.irshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >>= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/isub.js */
exports.isub = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.isub.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") -= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/iushift.js */
exports.iushift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.iushift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >>>= (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/lshift.js */
exports.lshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.lshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") << (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/mod.js */
exports.mod = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.mod.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") % (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/mul.js */
exports.mul = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.mul.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") * (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/parameter.js */


exports.parameter = function (name) {
	this.name = name;
};

exports.parameter.prototype.toString = function () {
	return this.name.toString();
};

/* js/src/parameters.js */


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

/* js/src/rshift.js */
exports.rshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.rshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >> (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/statements.js */


exports.function = function (statements) {
	this.statements = statements;
};

exports.function.prototype.toString = function () {
	var str = "";

	this.statements.forEach(function (statement) {
		str += statement.toString() + " ;\n";
	});

	return str;
};

/* js/src/sub.js */
exports.sub = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.sub.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") - (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/ushift.js */
exports.ushift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.ushift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >>> (" + this.rhs.toString( ) + ")" ;
} ;

/* js/src/variable.js */


exports.variable = function (name) {
	this.name = name;
};

exports.variable.prototype.toString = function () {
	return this.name.toString();
};

/* js/src/while.js */


exports.while = function (cond, statements) {
	this.cond = cond;
	this.statements = statements;
};

exports.while.prototype.toString = function () {
	var str = "";

	str += "while (";
	if (this.cond !== null) {
		str += this.cond.toString();
	}
	str += ") {\n";

	str += this.statements.toString();

	str += "}\n";
	return str;
};

return exports ;
} ;
if ( typeof exports === "object" ) {
	definition( exports ) ;
}
else if ( typeof define === "function" && define.amd ) {
	define( "@aureooms/js-code" , [ ] , function ( ) { return definition( { } ) ; } ) ;
}
else if ( typeof window === "object" && typeof window.document === "object" ) {
	definition( window["code"] = { } ) ;
}
else console.error( "unable to detect type of module to define for @aureooms/js-code") ;
} )( ) ;
