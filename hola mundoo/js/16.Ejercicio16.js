'use strict'
//decir si un número es par o impar //
var  numero=parseInt(prompt("introduce un número ",0));
while(isNaN(numero)){
alert ("número invalido");
numero=parseInt(prompt("introduce un número ",0));
}
if (numero%2==0){
	alert("Este número es par ");
}else{
	alert("Este número es impar");
	}