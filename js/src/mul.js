exports.mul = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.mul.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") * (" + this.rhs.toString( ) + ")" ;
} ;
