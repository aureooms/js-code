exports.brackets = function ( object , key ) {
	this.object = object ;
	this.key = key ;
} ;

exports.brackets.prototype.toString = function ( ) {
	return "(" + this.object.toString( ) + ")[" + this.key.toString( ) + "]" ;
} ;
