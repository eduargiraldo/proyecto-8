let papaStop = document.getElementById("papaquieto");
let botonAudio = new Audio('./sound/sonido.mp3');
let botonPlay = document.getElementById("play");
let botonPause = document.getElementById("pause");

botonPlay.disabled = true; 
botonPause.disabled = true; 

function son(num){
    if (num == 1){
        botonAudio.play(); 
    }else{
        botonAudio.pause(); 
    }
}

function obtenerTiempoFaltante(fechaLimite){
    let ahora = new Date();
    tiempoFaltante = (new Date(fechaLimite) - ahora + 1000) / 1000;
    segundosFaltantes = ('0' + Math.floor(tiempoFaltante % 60)).slice(-2);
    minutosFaltantes = ('0' + Math.floor(tiempoFaltante /60 % 60)).slice(-2);
    horasFaltantes = ('0' + Math.floor(tiempoFaltante / 3600 % 24)).slice(-2);
    diasFaltantes = ('0' + Math.floor(tiempoFaltante / (3600 * 24))).slice(-2);

    return {
        segundosFaltantes,
        minutosFaltantes,
        horasFaltantes,
        diasFaltantes,
        tiempoFaltante,
    }
};

//console.log(obtenerTiempoFaltante('DEC 25 2023 00:00:00 GTM-0500'));

function cuentaRegresiva(tiempoFaltante,mensaje) {

    const titulo = document.getElementById("titulo");
    const dias = document.getElementById("dias");
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const tiempoActual = setInterval( () =>{
        let t = obtenerTiempoFaltante(tiempoFaltante);
        dias.innerHTML = t.diasFaltantes;
        horas.innerHTML = t.horasFaltantes;
        minutos.innerHTML = t.minutosFaltantes;
        segundos.innerHTML = t.segundosFaltantes;
        
        if(t.tiempoFaltante <= 1){
            clearInterval(tiempoActual);
            titulo.innerHTML = mensaje;
            papaStop.classList.add("on");
            botonPlay.classList.add("on");
            botonPause.classList.add("on");
            botonPlay.disabled = false; 
            botonPause.disabled = false; 
        }
    }, 1000)
}

cuentaRegresiva('NOV 08 2023 17:39:00', 'Feliz Navidaaddaddadaddadd')