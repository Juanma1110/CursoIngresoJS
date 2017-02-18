function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	var total= document.getElementById('promedio').value;

//VER lo de la RESPUESTA si sirve o no

	while ( respuesta )
	{
         contador++;
	  num=prompt ("");
	  num=parseInt(num);
		acumulador=parseInt(acumulador +=num);
		respuesta=confirm ("");
        total= parseInt (acumulador/contador);
        alert ("lleva acumulado"+acumulador);
		alert("su promedio es"+total);
	

		
	}





}//FIN DE LA FUNCIÓN