const partido = (p1, p2) => {
    if (p1 == 0) {
        p1 = 'Love';
        console.log(`${p1} - ${p2}`);
    } else if (p2 == 0) {
        p2 = 'Love';
        console.log(`${p1} - ${p2}`);
    } else if ((p1 >= 40 && p2 >= 40) && (p1 == p2)) console.log('Deuce');
    else if ((p1 >= 40 && p2 >= 40) && (p1 - p2 == 5)) console.log('Jugador 1 está en ventaja'); 
    else if ((p1 >= 40 && p2 >= 40) && (p2 - p1 == 5)) console.log('Jugador 2 está en ventaja');
    else if ((p1 >= 40 && p2 >= 40) && (p1 - p2 >= 10)) console.log('Jugador 1 ha ganado'); 
    else if ((p1 >= 40 && p2 >= 40) && (p2 - p1 >= 1)) console.log('Jugador 2 ha ganado');
    else if (p1 == 40 && p2 < 30) console.log('Jugador 1 ha ganado');
    else if (p2 == 40 && p1 < 30) console.log('Jugador 2 ha ganado');
    else console.log(`${p1} - ${p2}`);

}

const termina = (p1, p2) => {
    if ((p1 >= 40 && p2 >= 40) && (p1 - p2 >= 10)) return true; 
    else if ((p1 >= 40 && p2 >= 40) && (p2 - p1 >= 10)) return true; 
    else if (p1 == 40 && p2 < 30) {
        console.log('Jugador 1 ha ganado');
        return true;
    }
    else if (p2 == 40 && p1 < 30) {
        console.log('Jugador 2 ha ganado');
        return true;
    }
    return false;
}

let finPartido = false;
let p1 = 0;
let p2 = 0;

while (!finPartido) {
    p1 = prompt('Puntaje jugador 1');
    p2 = prompt('Puntaje jugador 2');

    partido(p1, p2);
    finPartido = termina(p1, p2);
}