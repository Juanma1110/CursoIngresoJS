function Mostrar()
{

var num= prompt ("");
var cont=0;

for (var i= 1; i <= num; i++){

alert (i);

if (num %i==0) {

    console.log (i);
    cont++;
}

alert (" cantidad divisores encontrados"+cont);
}



}//FIN DE LA FUNCIÓN