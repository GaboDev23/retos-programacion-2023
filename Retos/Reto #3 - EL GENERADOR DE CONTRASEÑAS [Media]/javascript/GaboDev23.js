let contrasena = '';
let numeroAleatorio = Math.floor(Math.random() * (16 - 8 + 1)) + 8;
let caracterAleatorio = '';
let opcionAleatoria = 0;

while (contrasena.length < numeroAleatorio) {
    opcionAleatoria = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    
    if (opcionAleatoria == 1) {
        caracterAleatorio = Math.floor(Math.random() * (57 - 33 + 1)) + 33;
        contrasena += String.fromCharCode(caracterAleatorio);
    } else if (opcionAleatoria == 2) {
        caracterAleatorio = Math.floor(Math.random() * (90 - 63 + 1)) + 63;
        contrasena += String.fromCharCode(caracterAleatorio);
    } else if (opcionAleatoria == 3) {
        caracterAleatorio = Math.floor(Math.random() * (122 - 95 + 1)) + 95;
        contrasena += String.fromCharCode(caracterAleatorio);
    }
}

console.log(contrasena);