exports.ushift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.ushift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >>> (" + this.rhs.toString( ) + ")" ;
} ;
