const { describe } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('l', {
                    alias: 'list',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Es el limite de la tabla de multiplicar'
                })
                .check( (argv, option) => {
                    if ( isNaN( argv.b ) ){
                        throw 'la base debe ser un número'
                    }
                    return true;
                })
                .argv;

module.exports = argv;