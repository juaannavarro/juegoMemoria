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
let intervalo;

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7 , 8, 8];
numeros = numeros.sort(function() {return Math.random() - 0.5});
console.log(numeros);

function contarTiempo() {
    clearInterval(intervalo);  
    let tiempo = 30;
    intervalo = setInterval(function() {
        tiempo--;
        mostrarTiempo.innerHTML = `Tiempo Restante: ${tiempo}`;
        if (tiempo == 0) {
            alert('¡Has perdido!');
            detenerJuego();
        }
    }, 1000);
}
function detenerJuego() {
    clearInterval(intervalo);
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
                clearInterval(intervalo);
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


document.getElementById('restartButton').addEventListener('click', function() {
    tarjetaMostrada = 0;
    tarjeta1 = null;
    tarjeta2 = null;
    primeraEleccion = null;
    segundaEleccion = null;
    intentos = 0;
    aciertos = 0;
    mostrarintentos.innerHTML = 'Intentos: 0';
    mostraraciertos.innerHTML = 'Aciertos: 0';
    mostrarTiempo.innerHTML = 'Tiempo Restante: 30';
    temporizador = false;

    for (let i = 0; i < 16; i++) {
        let tarjeta = document.getElementById(i.toString());
        tarjeta.innerHTML = '';
        tarjeta.disabled = false;
        tarjeta.style.backgroundColor = ''; 
    }
    contarTiempo();
    numeros = numeros.sort(function() { return Math.random() - 0.5 });
    console.log(numeros);
    this.disabled = true;

});
document.getElementById('instructionsButton').addEventListener('click', function() {
    alert("Instrucciones del Juego:\n\n- Haz clic en las tarjetas para voltearlas.\n- Encuentra los pares de números iguales.\n- Completa todos los pares antes de que se acabe el tiempo.\n- ¡Diviértete!");
});
