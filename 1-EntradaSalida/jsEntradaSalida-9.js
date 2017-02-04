/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/


function MostrarAumento()
{
var sueldo=document.getElementById("sueldo").value; 
var resultado= document.getElementById("resultado").value; 
var aumento= 1.10;
sueldo= parseInt(sueldo);
resultado= parseInt (sueldo * aumento);
alert(resultado);
	
}
