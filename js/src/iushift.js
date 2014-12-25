exports.iushift = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.iushift.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") >>>= (" + this.rhs.toString( ) + ")" ;
} ;
