let primo = (numero) => {
    let contador = 0;

    if (numero == 1) return 'no es primo, ';

    for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
            contador++;
        }
    }

    if (contador == 0) return 'es primo, ';
    else if (contador >= 0) return 'no es primo, ';
}

let fibonacci = (numero) => {
    if (cuadradoPerfecto(5 * numero * numero + 4) || cuadradoPerfecto(5 * numero * numero - 4)) return 'es fibonacci, ';
    else return 'no es fibonacci, ';
}

let cuadradoPerfecto = (numero) => {
    raiz = Math.trunc(Math.sqrt(numero));

    return raiz * raiz == numero;
}

let par = (numero) => {
    if (numero % 2 == 0) return 'es par';
    else return 'no es par';
}

let correccion = '';
let numero = prompt('Introduce un numero');

correccion += `El numero ${numero}, `;
correccion += primo(numero);
correccion += fibonacci(numero);
correccion += par(numero);

console.log(correccion);