/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;

// al estar fuera es una variable global y todas la funciones tienen acceso a ella
// se puede usar Switch tambien
//comenzar (); al final de cada funcion para no tener que refrescar la pagina cada vez que quiera resultado nuevo
// para saber cantidad de veces se eligió una funcion, se pone var cantPiedras=0; y adentro
// de la funcion elegida, en este caso piedra, va: cantPiedras= cantPiedras+1;
// cantPiedras += 1; tambien sirve
// otra forma más es cantPiedras++  (se llama operador poscrecimiento)
// operador pre incremento: ++cont (buscar diferencia)
// acumulador= acumulador + otra variable
// acumulador += otra variable (ejemplo de compras donde se va acumulando valor, no cambiandose por compra)
//3º forma de usar acumulador= bandera (para true / false)
//function comprar ()
// {
    //if (primera-pedirle nombre primera vez que entra y nunca más-)
    //{
              //nombre=prompt ("");
               //primera=false;
    //}
//}

function comenzar()
{
	
eleccionMaquina= Math.floor (Math.random () * (4-1)) + 1;
console.log(eleccionMaquina);


}
function piedra()
{
   

    if (eleccionMaquina == 1) {

        alert ("empate");

    }

    else if (eleccionMaquina == 2) {
alert ("perdiste");

    }

    else {
   alert ("ganaste");

    }
    }
	

//FIN DE LA FUNCIÓN
function papel()
{



if (eleccionMaquina == 1)
{
   alert ("ganaste");
   
}

else if (eleccionMaquina == 2) {

    alert ("empate");


}

else {
  alert ("perdiste");

}

}//FIN DE LA FUNCIÓN

function tijera()
{



if ( eleccionMaquina == 1) {

alert("perdiste");

}	

else if ( eleccionMaquina == 2){
     alert ("ganaste");

}

else {
    alert ("empate");

}

}//FIN DE LA FUNCIÓN