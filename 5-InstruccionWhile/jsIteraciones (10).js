function Mostrar()
{

var num;

var contadorPositivo=0;
var contadorNegativo=0;
var contadorCeros=0;
var contadorPares=0;
var acumuladoPositivo=0;
var acumuladoNegativo=0;
var acumuladorCeros;
var acumuladoPares=0;

//var primera= true;


	

	while(confirm (""))
	{

		num=parseInt(prompt(""));


        
		if (num <0)
		{
			contadorNegativo++;
			acumuladoNegativo +=num;
		}
		
		else if (num > 0)

		{

			contadorPositivo++;
			acumuladoPositivo +=num;
		}

		else {
			contadorCeros++;
             acumuladorCeros+=num;
		}
	
	if ( num % 2 == 0)
	{
		contadorPares++;
        acumuladoPares+=num;
	}


	//ver ERROR de  document.write

Document.write ("el total de ceros es"+contadorCeros+"<br>"+"el total de positivos es"+contadorPositivo+"<br>"+"el total de negativos es"+contadorNegativo+"<br>"+"el total de pares es"+contadorPares+"<br>");

	}




}//FIN DE LA FUNCIÓN