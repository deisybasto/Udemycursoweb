'use strict'

var categoria=["accion","terror","comedia"];
var peliculas=["La vida es bella","saw","rapidos y furiosos"];

var cine=[categoria,peliculas];
 peliculas.sort();//orden alfabetico
 pelicular.reverse();//ordenar reverso
/*console.log(cine[1][1]);
console.log(cine[0][2]);*/

//operaciones

var elemento="";
/*
do{
	elemento=prompt("introduce tu pelicula");
	peliculas.push(elemento);//agrega elemento
}
while(elemento!="acabar");

peliculas.pop(); //elimina último elemento de un array

peliculas[0]=undefined;//coloca el elemento x en undefined

*/
//eliminar un elemento un array

var indice=peliculas.indiceOf("saw");
if(indice>-1){
	peliculas.splice(indice,1);
}

var pelisstring=peliculas.join();//array tring
var cadena="texto1,texto2,texto3";
var cadena_array=cadena.split(", ");//string array

