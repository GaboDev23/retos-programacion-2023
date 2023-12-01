const partido = (p1, p2) => {
    if (p1 >= 40 && p2 >= 40 && p1 == p2) console.log('Deuce');
    else if (p1 >= 40 && p2 >= 40 && p1 > p2 && p1 - p2 == 5) console.log('Jugador 1 lleva la ventaja');
    else if (p1 >= 40 && p2 >= 40 && p2 > p1 && p2 - p1 == 5) console.log('Jugador 2 lleva la ventaja');
    else if ((p1 >= 40 || p2 >= 40) && p1 > p2 && p1 - p2 >= 10 && p2 < 30) console.log('Jugador 1 gana');
    else if ((p1 >= 40 || p2 >= 40) && p2 > p1 && p2 - p1 >= 10 && p1 < 30) console.log('Jugador 2 gana');    
    else if (p1 == 0) {
        p1 = 'Love';
        console.log(`${p1} - ${p2}`);
    }
    else if (p2 == 0) {
        p2 = 'Love';
        console.log(`${p1} - ${p2}`);
    } else console.log(`${p1} - ${p2}`);
}

const termina = (p1, p2) => {
    return (p1 >= 40 || p2 >= 40) && ((p1 - p2 >= 10) || (p1 == 40 && p2 < 30) || (p2 - p1 >= 10) || (p2 == 40 && p1 < 30));
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