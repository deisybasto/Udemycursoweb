'use strict'
//es un conjunto de intrucciones que se puede reutilizar

function calculadora(){
	console.log("hola");
	console.log("buenas");

	return "hlar";

}

var resultado=calculadora();
console.log(calculadora);
//parametros
function consolep(numero1,numero2){
	console.log("suma"+(numero1+numero2));
	console.log("resta"+(numero1-numero2));
	console.log("division"+(numero1/numero2));
	console.log("multiplicación"+(numero1*numero2));
	console.log("**************************************");

}
function documentp(numero1,numero2) {
	 document.write("suma"+(numero1+numero2)+"</br>");
	document.write("resta"+(numero1-numero2)+"</br>");
	document.write("division"+(numero1/numero2)+"</br>");
	document.write("multiplicación"+(numero1*numero2)+"</br>");
	document.write("**************************************");
}


function calculadora2(numero1,numero2,metodo=false){
	//conjunto a ejecutar
	if(metodo==false){
		consolep(numero1,numero2);   
	}else{
	documentp(numero1,numero2);
}
return true;
}

/*
for(var i=1;i<=10;i++){
	console.log(i);
	calculadora2(i,2);
}*/

//parametros opcionales

calculadora2(1,2,true);
calculadora2(4,5);