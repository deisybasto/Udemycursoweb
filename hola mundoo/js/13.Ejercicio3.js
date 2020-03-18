'use strict'
//mostrar los números que hay de un num1 a num2 y cuantos ingreso el usuario
var num1=parseInt(prompt("ingresa un número"),0);
var num2=parseInt(prompt("ingresa un número"),0);

if(num1<=num2){
for (var i=num1;i<=num2;i++) {
	document.write(i);
}}
else if(num1>=num2){
	for (var i=num2;i<=num1;i++) {
	document.write(i+"<br/>");
}
}
else{
	alert("numero invalido");
}

