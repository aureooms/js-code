exports.iadd = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.iadd.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") += (" + this.rhs.toString( ) + ")" ;
} ;
