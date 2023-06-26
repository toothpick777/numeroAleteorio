const button = document.getElementById("botton");
const resultadoDeMaquina = document.getElementById("resultadoMaquina");
const numeroDeJugador = document.getElementById("numeroJugador");

button.addEventListener("click", numerito);

function numerito() {
    const numeroRandom = Math.floor(Math.random() * 3) + 1;
    let num = parseInt(numeroDeJugador.value);
    
    if (num === numeroRandom) {
        resultadoDeMaquina.innerText = numeroRandom + gane();
    } else {
        resultadoDeMaquina.innerText = numeroRandom + perdi();
    }
}

function gane() {
    return " GANASTE :)";
}

function perdi() {
    return " PERDISTE :(";
}