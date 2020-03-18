'use strict'

//parametro rest spred
//rest
function listadofrutas(fruta1,fruta2, ...resto_frutas){
	console.log("Fruta1:" , fruta1);
	console.log("Fruta1:" , fruta2);
}

listadofrutas("naranja","manzana","sandia","pera");

var fruta=["naranja","manzana"];
listadofrutas(...fruta,"sandia","pera");
