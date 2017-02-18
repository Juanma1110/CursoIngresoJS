function Mostrar()
{

	var contador=0;
	var num;
	var max;
	var min;
	var primera= true;
    var respuesta= "si";
	// VERLO BIEN
	
	var respuesta='si';

	while(confirm (""))
	{
		num=prompt ("");
		num=parseInt(num);

if (primera)
{

  primera=false;
    max=num;
	min=num;
}
 
 else  {

	 if (num > max)
	   max=num;

	   if (num < min)
	   min=num;
    

 }
  alert("minimo "+min);
  alert ("maximo"+max);





}



}