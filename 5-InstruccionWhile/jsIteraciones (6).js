function Mostrar()
{

	
	var contador=0;
	var num;
	var acumulador= document.getElementById("suma").value;
	var total= document.getElementById("promedio").value;
   
	while (contador < 5)
	{
		
		num= prompt ("");
		num=parseInt(num);
		contador++;
		acumulador=parseInt(acumulador+=num);
		total= parseInt(acumulador / contador);
	
	}

		alert (acumulador);
alert(total);



}//FIN DE LA FUNCIÓN