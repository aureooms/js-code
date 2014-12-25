exports.irshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.irshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >>= (" + this.rhs.toString( ) + ")" ;
} ;
