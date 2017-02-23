var parar= false;

function Mostrar()
{

parar=true;

for (var i=0 ;;i++ ){



if (i=10000000) {

console.log (i);
i=0;   // para que arranque todo de vuelta de vuelta

  break;  
}


if (parar)
{

console.log ("fin");
break;

}
}

}//FIN DE LA FUNCIÓN