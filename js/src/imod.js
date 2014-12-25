exports.imod = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.imod.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") %= (" + this.rhs.toString( ) + ")" ;
} ;
