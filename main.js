let tarjetaMostrada = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primeraEleccion = null;
let segundaEleccion = null;
let intentos = 0;
let aciertos = 0;
let mostrarintentos = document.getElementById('Intentos');
let mostraraciertos = document.getElementById('Aciertos');
let mostrarTiempo = document.getElementById('Tiempo Restante');
let temporizador = false;


let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7 , 8, 8];
numeros = numeros.sort(function() {return Math.random() - 0.5});
console.log(numeros);

function contarTiempo() {
    let tiempo = 30;
    let intervalo = setInterval(function() {
        tiempo--;
        mostrarTiempo.innerHTML = `Tiempo Restante: ${tiempo} `;
        if (tiempo == 0) {
            alert('¡Has perdido!');
            clearInterval(intervalo);
        }
    }, 1000);
}

function mostrar(id) {

    if (temporizador == false) {
        contarTiempo();
        temporizador = true;
    }



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
        mostrarintentos.innerHTML = `Intentos: ${intentos}`;
    }

    if (tarjetaMostrada == 2) {
        if (primeraEleccion == segundaEleccion) {
            tarjeta1.style.backgroundColor = 'green';
            tarjeta2.style.backgroundColor = 'green';
            tarjetaMostrada = 0;
            aciertos++;
            mostraraciertos.innerHTML = `Aciertos: ${aciertos}`;

            if (aciertos == 8) {
                alert('¡Has ganado!');
            }
        } else {
            setTimeout(function() {
                tarjeta1.innerHTML = '';
                tarjeta2.innerHTML = '';
                tarjeta1.disabled = false;
                tarjeta2.disabled = false;
                tarjetaMostrada = 0;
            }, 1000);
        }
    }
}