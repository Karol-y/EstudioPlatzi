//función para generar números aleatorios
function aleatorio(min, max){
    //fórmula para generar números aleatorios, dependiendo del rango que se escoja
    return Math.floor(Math.random()*(max-min + 1) + min)
}
function eleccion(jugada){
    let resultado = ""
    if(jugada == 1){
        resultado = "Piedra \u{1FAA8}"
    } else if(jugada == 2){
        resultado = "Papel \u{1F4F0}"
    } else if(jugada == 3){
        resultado = "Tijera \u2702\uFE0F"
    } else {
        resultado = "Elegiste un valor equivocado"
    }
    return resultado
}
//1 es papel, 2 es piedra, 3 es tijera
let jugador = 0
let pc = 0 
let min = 1, max = 3
let triunfos = 0
let perdidas = 0

while(triunfos < 3 && perdidas < 3){
    pc= aleatorio(1, 3)
    jugador = prompt("Elije: 1 para Piedra, 2 para Papel, 3 para Tijera")
    //alert("Elegiste " + jugador)
    alert("Tu eliges: " + eleccion(jugador))
    alert("PC elige: " + eleccion(pc))

    //COMBATE
    if(pc == jugador){
        alert("¡TIE!")
    } else if(jugador == 1 && pc == 3){
        alert("¡YOU WON!")
        triunfos = triunfos + 1
    } else if(jugador == 2 && pc == 1){
        alert("¡YOU WON!")
        triunfos = triunfos 
    } else if(jugador == 3 && pc == 2){
        alert("¡YOU WON!")
        triunfos = triunfos + 1
    } else{
        alert("¡YOU LOSE!")
        perdidas = perdidas + 1
    }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces")
            