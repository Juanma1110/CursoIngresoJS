function Mostrar()
{

var edad= document.getElementById("edad").value;

if (edad > 18) {

    alert ("Mayor de Edad");

}

 else if ( edad > 12 && edad <= 17) {

    alert ("es adolescente");

}

else  {

    alert ("es niño");
}



}//FIN DE LA FUNCIÓN