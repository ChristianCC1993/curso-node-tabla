
const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5, list = false, hasta = 10) => {

    try {
        let salida,consola ='';

        for (let i = 1; i <= hasta; i++){
            salida  +=`${ base } x ${ i } = ${ base * i }\n`;
            consola +=`${ base } ${'x'.yellow} ${ i } ${'='.yellow} ${ base * i }\n`;
        }
        if (list){
            console.log(`=====================`.red);
            console.log(`    Tabla del: ${base}`);
            console.log(`=====================\n`.red);
            console.log(consola);
        }
        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        return  `tabla-${base}.txt`;
    } catch (eror) {
        throw err;
    }
}

exports.crearArchivo = crearArchivo