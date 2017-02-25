//profesor

EJERCICIO 6


Var cont=0;
Var importe;

Var max,min;

Var bandera=true;

While (cont <24)

{

Cont++;

Importe=prompt (“”);

While (importe <1)  //si era con if, a la segunda vez si pones negativo u otro 0 te lotoma porque es una sola vez, con WHILE ES SIEMPRE

{

Importe=prompt (“”);

}


If (bandera)

{

Bandera=false;

Max=importe;
Min=importe;

}

Else {

If (importe >max)
{
Max=importe;
}
If (importe < min)
{
Min=importe;

}

---------------





EJERCICIO 7

var cont=0;
var nota,sexo;
var acumNota=0;
var primera=true;

while (cont < 100)

{
cont++;
nota=prompt ("");

while (nota <0 || nota >10    )  //lo hizo desde el punto de vista de lo que no va

{
nota=prompt ("");


}

nota=parseInt(nota);
sexo=prompt ();

while (sexo !=  "F" && sexo == "m"  ) //verlo bien

{
sexo=prompt ("");

}

acumNotas+=notas;  //ver si le falto algo

if (primera)
{
primera=false;
min=nota;


}

else {

    if (nota <min) {
min=nota;

    }
}
}