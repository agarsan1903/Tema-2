function comprobar() {
    let nota;
    nota = parseFloat (document.getElementById ("nota").value);

    
    if (nota >= 0 && nota <=10) {
        if (nota >=5) {   
            document.getElementById("mensaje").innerHTML = "Aprobado";
        }
        else {
            document.getElementById("mensaje").innerHTML = "Suspenso";
        }
        
    }
    else {
        document.getElementById("mensaje").innerHTML = "La nota que has puesto no es válida.";
    }
}