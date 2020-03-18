'use strict'
//tabla de multiplicar //
var numero=parseInt(prompt("ingrese  un número",0));

var resultado=0;
while(isNaN(numero)){
	alert("numero invalido");
numero=parseInt(prompt("ingrese  un número",0));
}
document.write("<h1>tabla del numero"+numero+"</h1>");
for(var i=0;i<=10;i++){
	
	resultado=i*numero
	document.write(i+"x"+numero+"="+resultado+"<br/>");
}
//tabla de todos los numero
for(var c=0;c<=10;c++){
	document.write("<h1>tabla del numero"+c+"</h1>")
	for(var i=0;i<=10;i++){
	resultado=i*c
	document.write(i+"x"+c+"="+resultado+"<br/>");
}
}