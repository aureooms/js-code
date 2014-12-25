exports.delete = function ( expression ) {
	this.expression = expression ;
} ;

exports.delete.prototype.toString = function ( ) {
	return "delete (" + this.expression.toString( )  + ")" ;
} ;
