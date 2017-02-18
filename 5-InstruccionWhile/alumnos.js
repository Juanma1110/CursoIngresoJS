//alumnos cantidad
//aprobaron cantidad- promedio
//desaprobaron cantidad- promedio
//promedio notas
// cantidad de "diez"
//sexo -cantidad mujeres y cantidad hombres-
//nota maxima y nota minima
// nota maxima para mujeres - nota maxima hombres
//nombre mujer  
//nombre hombre  


var contadorAlumnos, contadorAprobados,contadorHombres,contadorMujeres,contadorDiez=0;
var acumuladorNotas,acumuladorMujeres,acumuladorHombres=0;
var alumnosAprobados=0;
var nota;
var notaMinima;
var notaMaxima;
var sexo= prompt ("ingrese sexo ");
var primero= true;
var primeraMujer=true;
var primerHombre=true;
var nombre= prompt ("");
var mujerMaxima;
 
 //FUNCTION MOSTRAR?
 
while (confirm (""))
{
nota=parseInt (prompt ("ingrese sexo "));
contadorAlumnos++;
acumuladorNotas+=nota;

if (nota >4)
{
 acumuladorAprobados += nota;
 contadorAprobados++;

}


if (nota == 10)

{

contadorDiez++;

}



while (sexo =="m" && sexo == "h")
{

sexo=prompt ("");

if (sexo == "m")
{

contadorMujeres++;

}

else 

{

contadorHombres++;

}

}


if (primero)

{

primero=false;
notaMaxima= nota;
notaMinima=nota;


}

if (sexo == "m")
{

if (primeraMujer) {

primeraMujer=false;
notaMaxima=nota;


}

else
{

if (nota > notaMaxima)

notaMaxima=nota;

}

}

if (sexo == "h")
{

if (primerHombre) {

primerHombre=false;
notaMaxima=nota;


}

else
{

if (nota > notaMaxima)

notaMaxima=nota;

}

}

if (primeraMujer)
{
primeraMujer=false;
notaMaxima=nota;
mujerMaxima=nombre; //primera mujer q entre va a tener nota mas alta, sea la que sea al ser la primera

}

if (nota > notaMaxima)
{
notaMaxima=nota;
mujerMaxima=nombre;

}

//HACER LO MISMO CON HOMBRE y los alerts
// HACER TPS 4,5,6, dos adivinar numero, dos piedra papel tijera  y 12
//ver trucos para codigos largos
}