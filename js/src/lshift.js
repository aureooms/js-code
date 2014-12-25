exports.lshift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.lshift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") << (" + this.rhs.toString( ) + ")" ;
} ;
