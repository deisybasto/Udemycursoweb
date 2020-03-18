'use strict'
//funciones anonimas y callbacks

function sumame(numero1,numero2,sumaYmuestra,sumaPorDos){
	var sumar=numero1+numero2;
	sumaYmuestra(sumar);
	sumaPorDos(sumar);
}
sumame(5,7,dato =>{
console.log(dato);
}, dato =>{
	console.log(dato*2);
}
);
