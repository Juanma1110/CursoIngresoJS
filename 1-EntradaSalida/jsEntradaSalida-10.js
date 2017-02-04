/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/


function MostrarAumento()
{
	var importe = document.getElementById("importe").value;
var resultado= document.getElementById("resultado").value;
var descuento= 1.25;
    importe= parseInt(importe);
    resultado= parseInt (importe / descuento);
    alert (resultado);
}
