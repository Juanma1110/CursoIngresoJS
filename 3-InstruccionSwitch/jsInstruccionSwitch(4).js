function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch (mesDelAño) {

case "Enero":
alert ("Este mes tiene 30 o más días");
break;


case "Febrero":
alert (" tiene 28 días");
break;


case "Marzo":
case "Agosto":
case "Septiembre":
alert ("tiene 48 dias");
break;


case "Octubre":
case  "Abril":
alert ("tiene 2 días");
break;

}

}//FIN DE LA FUNCIÓN