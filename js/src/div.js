exports.div = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.div.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") / (" + this.rhs.toString( ) + ")" ;
} ;
