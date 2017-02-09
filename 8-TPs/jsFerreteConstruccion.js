/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo = document.getElementById("Largo").value;
var ancho= document.getElementById("Ancho").value;
var resultado;

largo=parseInt(largo);
ancho=parseInt(ancho);
resultado=parseInt((largo+ancho) *6);
alert(resultado);
}

function Circulo () 
{
var radio= document.getElementById("Radio").value;
Math.PI;
var resultado;

//diametro*PI*3 ver donde sale el diametro
radio=parseInt(radio);
resultado=parseInt (radio * 3);
alert (resultado);

}
function Materiales () 
{
    var cemento= 2;
    var cal= 3;
	var largo = document.getElementById("Largo").value;
var ancho= document.getElementById("Ancho").value;
var resultadoCemento;
var resultadoCal;

largo=parseInt(largo);
ancho=parseInt(ancho);
resultadoCemento= parseInt((largo*ancho) *2 );
var texto= "bolsas de cemento";
alert ("se necesitan " +resultadoCemento +texto);
resultadoCal=parseInt((largo*ancho)*3);
var texto2= "bolsas de Cal";
alert ("se necesitan " +resultadoCal +texto2);
}