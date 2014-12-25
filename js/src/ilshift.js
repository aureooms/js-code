exports.ilshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.ilshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") <<= (" + this.rhs.toString( ) + ")" ;
} ;
