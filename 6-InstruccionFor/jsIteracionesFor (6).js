function Mostrar()
{
var num= prompt ("ingrese numero");
var contadorPares=0;


for (i=1; i <= num; i++) {

    alert ("pares: "+i);


	if ( i % 2 == 0)
	{
		
        contadorPares++;
	}

alert ("total de pares: "+contadorPares);
    
} 

}//FIN DE LA FUNCIÓN