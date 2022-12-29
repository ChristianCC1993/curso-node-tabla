

console.clear();
const colors = require('colors');

const { crearArchivo } = require('./multiplicar');

const argv = require('./config/yargs');


crearArchivo( argv.b,argv.l,argv.h)
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creada'))
    .catch(err => console.log(err));
