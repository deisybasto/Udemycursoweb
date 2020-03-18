'use strict'
//transformacion de textos

var numero=484;
var texto1="hola como estas";
var texto2="bien y tu";

var dato =numero.toString();
	dato=texto1.toLowerCase();
	dato=texto2.toUpperCase();
console.log(dato);

//calcular longitud
var nombre="deisy johanna basto contreras";

console.log(nombre.length);

//concatenar textos
 var textototal= texto1.concat(" "+texto2);
 console.log(textototal);
///metodo de búsqueda
var tex1="hola deisy basto contreras";

var busqueda=tex1.substr("contreras");
console.log(busqueda);
var busqueda2=tex1.indexOf("bast");
console.log(busqueda2);
var busqueda3=tex1.lastIndexOf("deisy");
console.log(busqueda3);
var busqueda4=tex1.search("johanna");
console.log(busqueda4);
var busqueda5=tex1.charAt("d");
console.log(busqueda5);
var busqueda6=tex1.startsWith("hola");
console.log(busqueda6);
var busqueda7=tex1.endsWith("contreras");
console.log(busqueda7);
var busqeda8=tex1.includes("basto");
console.log(busqeda8);

//METODO DE REEMPPLAZO
var busqueda=tex1.replace("contreras","hola");
console.log(busqueda);
var busqueda2=tex1.slice(12,18);
console.log(busqueda2);
var busqueda3=tex1.split(" ");
console.log(busqueda3);
var busqueda4=tex1.trim(" ");
console.log(busqueda4);

/*
REPLACE
SLICE
SPLIT
TRIM/

/*
subtr
match
indexOF
lastpf
search
chartAT
starwith
enswith
includes
*/