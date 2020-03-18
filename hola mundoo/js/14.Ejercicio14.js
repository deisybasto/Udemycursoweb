//numeros impares que esten entre dos númeeros/
'use strict'
var num1=parseInt(prompt("ingresa un número"),0);
var num2=parseInt(prompt("ingresa un número"),0);

if(num1<=num2){
for (var i=num1;i<=num2;i++) {
	if(i%2!=0){
	document.write(i+"<br/>");
}
}
}
else if(num1>=num2){
	for (var i=num2;i<=num1;i++) {
		if(i%2!=0){
	document.write(i+"<br/>");
}
}
}
else{
	alert("numero invalido");
}

/*
while(numero1<numero2){
	numero1++;

	if (numero1%2!=0){
	console.log(numero1);
	}
}