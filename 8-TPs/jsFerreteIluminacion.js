/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" 
o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  
el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  s
e debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	
var lamparas= 35;
lamparas=parseInt(lamparas);
var cantidad= document.getElementById("Cantidad").value;
var descuento= document.getElementById("precioDescuento").value;
var marca= document.getElementById("Marca").value;


if (cantidad >= 6) {

    descuento= parseInt ((lamparas * 50) / 100 );
    alert("el precio es "+descuento);
}

else if ( cantidad == 5 && marca == "ArgentinaLuz") {
 descuento = parseInt ((lamparas *40) / 100);
 alert("precio es "+descuento);


}

 if (cantidad == 5 && marca != "ArgentinaLuz" ) {
 descuento = parseInt ((lamparas *30) / 100);
 alert("precio es "+descuento);

}

 if ( cantidad == 4 && marca == "ArgentinaLuz" && marca == "FelipeLamparas") {
 descuento = parseInt ((lamparas *25) / 100);
 alert("precio es "+descuento);


}

if ( cantidad == 4 && marca != "ArgentinaLuz" && marca != "FelipeLamparas") {
 descuento = parseInt ((lamparas *20) / 100);
 alert("precio es "+descuento);

}

}
