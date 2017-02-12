function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

switch (laHora) {

case "7":
case "8":
case "9":
case "10":
case "11":
alert ("mañana");
break;

default:
alert ("error");
break;


}



}//FIN DE LA FUNCIÓN