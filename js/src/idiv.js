exports.idiv = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.idiv.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") /= (" + this.rhs.toString( ) + ")" ;
} ;
