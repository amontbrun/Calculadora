window.onload = function () {
    pantalla = document.getElementById("textoPantalla");
    pantallaHist = document.getElementById("pantallaHistoria");
    //document.onkeydown = teclado;
    //Andres Montbrun

}

x = "0"; // valor inicial de pantalla
xi = 1; //iniciar el mumero en pantalla 1=si , y 0= no
coma = 0; // estado coma decimal 0=no 1=si

ni = 0; // numero oculto o en espera
op = "no"; // operacio en curso;  "no" =  sin operacion; 

function numero(xx) { // funcion que recoge el numero pulsado en el argumento
    if (x == "0" || xi == 1) {
        pantalla.innerHTML = xx; // mostramos en pantalla dicho numero
        x = xx; // guardar el numero
        if (xx == ".") { //si escribimos una coma al principio del numero
            pantalla.innerHTML = "0.";
            x = xx;
            coma = 1; //cambiamos el estado de la coma
        }
    } else { // continuar con el numero
        if (xx == "." && coma == 0) {
            pantalla.innerHTML += xx;
            x += xx;
            coma = 1;
        } else if (xx == "." && coma == 1) {
            // si intentamos escribir una segunda coma decimal
            // no realizamos ninguna accion

        } else {

            pantalla.innerHTML += xx; //anadir y mostrar en pantalla
            x += xx; // anadir y guardar
        }

    }
    xi = 0; // el numero estain iciado y podemos ampliarlo
}

function operar(s) {
    ni = x; // poner en espera el 1er numero para poder escribir el nuevo numero
    op = s; // guardamos el tipo de operacion
    xi = 1; //inicializamos la pantalla
    pantallaHist.innerHTML = ni; // mostramos en pantalla dicho numero
}

function igualar() {
    if (op == "no") {
        pantalla.innerHTML = x; // mostramos el mismo numero
    } else {
        formula = ni + op + x; // escribimos la operacion en una cadena
        sol = eval(formula);
        pantalla.innerHTML = sol;
        x = sol; // guardamos la solucion de la operacion
        op = "no" // ya no hay operacione spendientes
        xi = 1; // me permite reinicial la pantalla
        pantallaHist.innerHTML = "0"; // mostramos en pantalla dicho numero
    }
}

function porcent() {
    x = x / 100;
    pantalla.innerHTML = x;
    igualar(); //resolvemos y mostramos el resultado
    xi = 1; //reiniciar pantalla
}
function raizc() {
    x = Math.sqrt(x);
    pantalla.innerHTML = x;
    igualar(); //resolvemos y mostramos el resultado
    xi = 1; //reiniciar pantalla
}

function retro() {
    cifras = x.length; // hayar el ultimo caracter en pantalla
    br = x.substr(cifras - 1, cifras); //info del ultimo caracter
    x = x.substr(0, cifras - 1); // quitamos el ultimo caracter
    if (x == "") {
        x == "0";
    }
    if (br == ".") {
        coma = 0;
    }
    pantalla.innerHTML = x;
}

function borradoParcial() {
    pantalla.innerHTML = 0;
    x = "0";
    coma = 0;
    
}

function borradoTotal() {
    pantalla.innerHTML = "0";
    pantallaHist.innerHTML = "0"; // mostramos en pantalla dicho numero
    x = "0";
    coma = 0;
    ni = 0;
    op = "no";
}
