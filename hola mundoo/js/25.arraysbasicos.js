'use strict'
//arrays

var nombre='deisy basto';
var nombres=["deisy","johanna","luis","felipe","daniel","marta"];

var lenguage=new Array("JS","Java","appium","python","PHP");
//acceder
console.log(nombres[2]);

//if array
 console.log(nombres.lenght);
  var elemento=parseInt(prompt("elemen del Array",0));
  if(elemento>=nombres.length){
  	alert("introduce el numero correcto" +nombres.length);
  }else{
  alert(nombres[elemento]);
}
//recorrer un array

document.write("<ul>");

for (var i = 0;i< lenguage.length;i ++) {
	document.write("<li>"+lenguage[i]+"</li>");
}
document.write("</li>");

for(let lenguajes in lenguage){
	document.write(lenguage[lenguajes]);
}
lenguage.forEach((elemento,index,data)=>){
	document.write(elemento+indice+data);
}

//busquedas
var precios=[10,20,50,60];
var busqueda=lenguage.find(lenguage=>lenguage=="JS");//hace busqueda string
var busquedas=precios.some(precios=>precios>20); //hace buseuqeda número