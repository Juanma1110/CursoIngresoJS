
	

function Mostrar()


{

var random;	
random = Math.floor (Math.random  () * (11-1)) +1;


if (random >=9) {

	alert ("excelente "+random);
}

	else if ( random <= 8 && random >= 4 ) {

            alert ("APROBO "+random);
	}

	else   {
		alert ("vamos que se puede "+random);
	}

	}

//FIN DE LA FUNCIÓN