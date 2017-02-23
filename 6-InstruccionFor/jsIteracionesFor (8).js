function Mostrar()
{


//QUE PASA CON EL PROMPT Y EL ALERT?


var num= prompt ("");
var cont=0;

for (i=num; i>0; i++) {

   
   if (num % i ==0){

       cont++;
   }

if (cont>2) {

    break;
}

}

if (cont ==2) {

    alert ("es primo");

   break;

}


}//FIN DE LA FUNCIÓN