function comprobar() {
    let numero;
    numero = parseInt (document.getElementById ("numero").value);

    
    if (numero %2 == 0) {
        document.getElementById("mensaje").innerHTML = ("El numero es par.")
    }
    else {
        if (numero != 0) {
            document.getElementById("mensaje").innerHTML = ("El numero es impar.") 
        }
    }
}