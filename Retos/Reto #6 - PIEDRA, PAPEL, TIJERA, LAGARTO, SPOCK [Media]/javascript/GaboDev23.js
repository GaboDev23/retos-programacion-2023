const resultado = (player1, player2) => {
    if (player1 == '🗿') piedra(player2);
    else if (player1 == '📄') papel(player2);
    else if (player1 == '✂️') tijera(player2);
    else if (player1 == '🦎') lagarto(player2);
    else if (player1 == '🖖') spock(player2);
    else console.log('Error');
}

const piedra = (player2) => {
    if (player2 === '🗿') console.log('Tie');
    else if (player2 === '📄') console.log('Jugador 2 gana');
    else if (player2 === '✂️') console.log('Jugador 1 gana');
    else if (player2 === '🦎') console.log('Jugador 1 gana');
    else if (player2 === '🖖') console.log('Jugador 2 gana');
    else console.log('Error');
}

const papel = (player2) => {
    if (player2 === '🗿') console.log('Jugador 1 gana');
    else if (player2 === '📄') console.log('Tie');
    else if (player2 === '✂️') console.log('Jugador 2 gana');
    else if (player2 === '🦎') console.log('Jugador 2 gana');
    else if (player2 === '🖖') console.log('Jugador 1 gana');
    else console.log('Error');
}

const tijera = (player2) => {
    if (player2 === '🗿') console.log('Jugador 2 gana');
    else if (player2 === '📄') console.log('Jugador 1 gana');
    else if (player2 === '✂️') console.log('Tie');
    else if (player2 === '🦎') console.log('Jugador 1 gana');
    else if (player2 === '🖖') console.log('Jugador 2 gana');
    else console.log('Error');
}

const lagarto = (player2) => {
    if (player2 === '🗿') console.log('Jugador 2 gana');
    else if (player2 === '📄') console.log('Jugador 1 gana');
    else if (player2 === '✂️') console.log('Jugador 2 gana');
    else if (player2 === '🦎') console.log('Tie');
    else if (player2 === '🖖') console.log('Jugador 1 gana');
    else console.log('Error');
}

const spock = (player2) => {
    if (player2 === '🗿') console.log('Jugador 1 gana');
    else if (player2 === '📄') console.log('Jugador 2 gana');
    else if (player2 === '✂️') console.log('Jugador 1 gana');
    else if (player2 === '🦎') console.log('Jugador 2 gana');
    else if (player2 === '🖖') console.log('Tie');
    else console.log('Error');
}

let player1 = prompt('Jugador 1, introduce tu jugada');
let player2 = prompt('Jugador 2, introduce tu jugada');

resultado(player1, player2);