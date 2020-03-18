'use strict'
//dos numeros mayor que y menor que o iguales

var num1=parseInt(prompt("ingresa un número"),0);
var num2=parseInt(prompt("ingresa un número"),0);

while(num1<=0||num2<=0||isNaN(num1)||isNaN(num2)){
	num1=parseInt(prompt("ingresa un número valido"),0);
	num2=parseInt(prompt("ingresa un número valido"),0);
}
if(num1==num2){
	alert(num1+" es igual a "+num2);
}else if (num2>num1) {
	alert(num2+" es mayor que "+num1);
}else if(num1>num1) {
	alert(num1+" es mayor que "+num2);
}
else{
	alert("número no valido");	
	
}

