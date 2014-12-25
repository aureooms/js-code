exports.rshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.rshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >> (" + this.rhs.toString( ) + ")" ;
} ;
