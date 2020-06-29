let minutos = document.getElementById('idMinutos');
let segundos = document.getElementById('idSegundos');
let centesimas = document.getElementById('idCentesimas');


function fcentesimas() {
    let cent = 00
    if (parseInt(centesimas.innerText) < 9) {
        cent = parseInt(centesimas.innerText) + 1
        centesimas.innerText = '0' + cent;
    } else {
        if (centesimas.innerText < 99) {
            cent = parseInt(centesimas.innerText) + 1
            centesimas.innerText = cent;

        }
        else {
            centesimas.innerText = '00'
        }
    }
}
function fsegundos() {
    let seg = 00
    if (parseInt(segundos.innerText) < 9) {
        seg = parseInt(segundos.innerText) + 1
        segundos.innerText = '0' + seg;
    } else {
        if (segundos.innerText < 59) {
            seg = parseInt(segundos.innerText) + 1
            segundos.innerText = seg;

        }
        else {
            segundos.innerText = '00'
        }
    }
}
function fminutos() {
    let min = 00
    if (parseInt(minutos.innerText) < 9) {
        min = parseInt(minutos.innerText) + 1
        minutos.innerText = '0' + min;
    } else {
        if (minutos.innerText < 59) {
            min = parseInt(min.innerText) + 1
            min.innerText = min;

        }
        else {
            minutos.innerText = '00'
        }
    }
}
let t1
let t2
let t3

function arranque() {
    t1 = window.setInterval(fcentesimas, 10)
    t2 = window.setInterval(fsegundos, 1000)
    t3 = window.setInterval(fminutos, 60000)
}

function pausa() {
    window.clearInterval(t1)
    window.clearInterval(t2)
    window.clearInterval(t3)
}

function stop(){
    window.clearInterval(t1)
    window.clearInterval(t2)
    window.clearInterval(t3)
    minutos.innerText = '00'
    segundos.innerText= '00'
    centesimas.innerText= '00'
}

