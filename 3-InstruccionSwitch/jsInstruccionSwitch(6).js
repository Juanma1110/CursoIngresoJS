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

case "12":
case "13":
case "14":
case "15":
case "16":
case "17":
alert ("tarde");
break;
}

}//FIN DE LA FUNCIÓN