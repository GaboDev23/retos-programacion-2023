let texto = prompt('Escribe un texto');
let textoNuevo = '';

let letras = {a:'4', A:'4', b:'13', B:'13', c:'[', C:'[', d:')', D:')', e:'3', E:'3', f:'|=', F:'|=', g:'&', G:'&', h:'#', H:'#', i:'1', I:'1', j:',_|', J:',_|', k:'>|', K:'>|', l:'£', L:'£', m:'JVI', M:'JVI', n:'^/', N:'^/', o:'0', O:'0', p:'|*', P:'|*', q:'(_,)', Q:'(_,)', r:'I2', R:'I2', s:'5', S:'5', t:'7', T:'7', u:'(_)', U:'(_)', v:'|/', V:'|/', w:'VV', W:'VV', x:'><', X:'><', y:'j', Y:'j', z:'2', Z:'2', 0:'o', 1:'L', 2:'Z', 3:'E', 4:'A', 5:'S', 6:'b', 7:'T', 8:'B', 9:'g'};

for (const caracter of texto) {
    for (const letra in letras) {
        if (caracter.includes(letra)) {
            textoNuevo += letras[letra];
        }
    }
}

console.log(textoNuevo);