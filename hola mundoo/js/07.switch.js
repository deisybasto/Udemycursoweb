'use strict'

var edad=18;
var imprime="";

switch(edad){
	case 18:
	imprime="acabas de cumplir la mayoria de edad";
	break;

	case 25:
	imprime="adulto milenial";
	break;

	case 30:
	imprime="tercer piso";
	break;

	case 40:
	imprime="crisis de los 40";
	break;

	default:
	imprime="edad es neutra";
	break;
}
console.log(imprime);