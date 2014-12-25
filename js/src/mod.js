exports.mod = function ( lhs , rhs ) {
	this.lhs = lhs ;
	this.rhs = rhs ;
} ;

exports.mod.prototype.toString = function ( ) {
	return "(" + this.lhs.toString( ) + ") % (" + this.rhs.toString( ) + ")" ;
} ;
