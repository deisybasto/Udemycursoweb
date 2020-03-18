//PLANTILLA DE TEXTO
'user strict'
var nombre=prompt("introduce texto");
var apellido=prompt("introduce apellido");
//aepplidos

var texto=`
<h1>Hola : ${nombre}</h1>
<h1>${apellido}</h1>

`;
document.write(texto);


