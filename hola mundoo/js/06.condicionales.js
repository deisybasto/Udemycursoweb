'use strict'
//condicionales  intrucción de comparación
var edad1=80;
var edad2=12;

if(edad1>edad2){
console.log("edad1 es mayor que edad2");

}else{
	console.log("edad2 es mayor que edad1");}

if(edad1>=18){
	console.log("mayor de edad");

	if (edad1<=33) {
	 console.log("eres milenial");
	}else if(edad1>=70){
		console.log("tas anciano");
	}else{
		console.log("ya no eres milenial");
	}

}else{
      console.log("menor de edad");
	}
/*
//operadores lógicos
and(y) &&
or ||*/
var year =2018;
if(year!=2016){
	console.log("años no es 2016 realmente es" + year);

}
if(year>=2000 && year <=2020 && year !=2018){
	console.log("año de era actual");
}

if (year ==2008 || year ==2018){
	console.log("el año termina en 8");
}