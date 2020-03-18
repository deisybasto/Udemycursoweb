//todos los numeros divisores de un numero introducido en un prompt/

'use strict'
var num1=parseInt(prompt("ingresa un número"),0);
var numero2=0;
while(num1>numero2){
	numero2++;

	if (num1%numero2==0){
	console.log(numero2);
	}
}
