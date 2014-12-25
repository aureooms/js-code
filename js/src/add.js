exports.add = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.add.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") + (" + this.rhs.toString( ) + ")" ;
} ;
