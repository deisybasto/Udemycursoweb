'use strict'
//suma de núemero que ingresas y media hasta que ingreses negativo
var suma=0;
var media=0;
 alert("ingresa varios numeros hasta que ingreses un negativo , calculare la suma de estos números y la media");

do{

	var num=parseInt(prompt("ingresa número"),0);
	if(isNaN(num)||num<0){
		alert("número no valido")
	}else{
	suma=suma+num;
	media++;
		}
} while(num>0||isNaN(num));
alert("suma de los números ingresados es: "+suma);
alert("media de los números ingresados es:  "+(suma/media));