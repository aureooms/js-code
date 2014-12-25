exports.isub = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.isub.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") -= (" + this.rhs.toString( ) + ")" ;
} ;
