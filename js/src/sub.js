exports.sub = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.sub.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") - (" + this.rhs.toString( ) + ")" ;
} ;
