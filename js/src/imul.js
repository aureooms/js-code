exports.imul = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.imul.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") *= (" + this.rhs.toString( ) + ")" ;
} ;
