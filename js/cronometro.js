let minutos = document.getElementById('idMinutos');
let segundos = document.getElementById('idSegundos');
let centesimas = document.getElementById('idCentesimas');
let estado = 'pausado';


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
            }
        }
    }
}

let t1

function arranque() {
    if (estado == 'pausado') {
        estado = 'andando'
        t1 = window.setInterval(fcentesimas, 10)

        let playPause = document.getElementById('playPause')
        playPause.innerHTML = '<i class="fas fa-pause"></i>';
    }
    else {
        estado = 'pausado'
        window.clearInterval(t1)
        let playPause = document.getElementById('playPause')
        playPause.innerHTML = ' <i class="fas fa-play"></i>';

    }

}


function stop() {
    estado = 'pausado'
    window.clearInterval(t1)
    let playPause = document.getElementById('playPause')
    playPause.innerHTML = ' <i class="fas fa-play"></i>';
    minutos.innerText = '00'
    segundos.innerText = '00'
    centesimas.innerText = '00'
}

