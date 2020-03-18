'use strict'
//calculadora

var numero1=parseInt(prompt("Ingrese primer número",0));
var operador=prompt("Ingrese un operador"," ");
var imprime="";
var numero2=parseInt(prompt("Ingrese primer número",0));
var resultado=0;
     console.log(operador);

while (isNaN(numero1||numero2)){
	alert("numero invalido");
	numero1=parseInt(prompt("Ingrese primer número",0));
	operador=prompt("Ingrese un operador"," ");
	numero2=parseInt(prompt("Ingrese primer número",0));
}


switch(operador){
	case "+":
	resultado=numero1+numero2;
	imprime=resultado;
	break;

	case "-":
	resultado=numero1-numero2;
	imprime=resultado;
	break;

	case "*":
	resultado=numero1*numero2;
	imprime=resultado;
	break;

	case "%":
	resultado=numero1%numero2;
	imprime=resultado;
	break;

	default :
	imprime="operador invalido";
	break;

}
alert(imprime);
console.log(imprime);
document.write(imprime);
