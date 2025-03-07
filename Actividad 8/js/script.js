function mensajeIf() {
    let hora;
    hora = parseFloat (document.getElementById ("hora").value);


    if (hora >=0 && hora <=24) {

        if (hora >= 6 && hora <=11) {
            document.getElementById("mensaje").innerHTML = "Buenos dias"
        }
        if (hora >= 12 && hora <=21) {
            document.getElementById("mensaje").innerHTML = "Buenas tardes"
        }
        if (hora >= 22 && hora <=5) {
            document.getElementById("mensaje").innerHTML = "Buenos dias"
        }
    }
    else { 
        document.getElementById("mensaje").innerHTML = "La hora que has introducido no es válida"
    }
}


function mensajeSwitch() {
    let hora1;
    hora1 = parseFloat (document.getElementById ("hora").value);

    switch (hora1) {
        case 7:
        case 8:
        case 9:
        case 10:
        case 11:
            document.getElementById("mensaje").innerHTML = "Buenos dias";
        break;

        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            document.getElementById("mensaje").innerHTML = "Buenas tardes";
        break;

        case 22:
        case 23:
        case 24:
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            document.getElementById("mensaje").innerHTML = "Buenas noches";
        break;
        default:
            document.getElementById("mensaje").innerHTML = "La hora que has introducido no es válida";
    }
}