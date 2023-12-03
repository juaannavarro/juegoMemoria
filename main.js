let tarjetaMostrada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primeraEleccion = null;
let segundaEleccion = null;
let intentos = 0;
let mostrarintentos = document.getElementById('intentos');


let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7 , 8, 8];
numeros = numeros.sort(function() {return Math.random() - 0.5});
console.log(numeros);


function mostrar(id) {
    tarjetaMostrada++;
    console.log(tarjetaMostrada);

    if (tarjetaMostrada == 1) {
        tarjeta1 = document.getElementById(id);
        tarjeta1.innerHTML = numeros[id];
        primeraEleccion = numeros[id];

        tarjeta1.disabled = true;
    } 
    else if (tarjetaMostrada == 2) {
        tarjeta2 = document.getElementById(id);
        tarjeta2.innerHTML = numeros[id];
        segundaEleccion = numeros[id];

        tarjeta2.disabled = true;
        intentos++;
    }
}