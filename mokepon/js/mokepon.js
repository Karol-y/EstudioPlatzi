let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota') 
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton.agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
}

function seleccionarMascotaJugador(){
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if(inputHipodoge.checked){
        //metodo para manipular el dom .innerHTML
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if(inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if(inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Debes seleccionar una Mascota")
    }

    seleccionarMascotaEnemigo()
} 

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if(ataqueAleatorio===1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if(ataqueAleatorio === 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else{
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego(){
    ataqueFuego = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
}
function ataqueAgua(){
    ataqueAgua = 'AGUA 💧'
    ataqueAleatorioEnemigo()
}
function ataqueTierra(){
    ataqueTierra = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio === 1){
        ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio === 2){
        ataqueEnemigo = 'AGUA'
    } else{
        ataqueEnemigo = 'TIERRA'
    }

    crearMensaje()
}

function crearMensaje(){
    let sectionMensajes = document.getElementById('mensajes')

    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador + ', la mascota del enemigo atacó con ' + ataqueEnemigo  + '- PENDIENTE'

    sectionMensajes.appendChild(parrafo)
}

window.addEventListener('load', iniciarJuego)
