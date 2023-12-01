const fs=require("fs");
const colors = require('colors');
const crearArchivo = async(base = 5,listar=false,hasta) => {
    try {
        let salida='';
        let consola = '';
        for (let i = 1; i <= hasta; i++) {
            consola += `${colors.blue(base)} ${colors.green('x')} ${colors.magenta(i)} = ${colors.bgCyan.black(base * i)}\n`;
            salida += `${base} x ${i} = ${base * i}\n`;
        }
      
        if(listar){ console.log(consola)};
         fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        const nombreArchivo=`tabla-${base}.txt`;
      return nombreArchivo;
    } catch (error) {
        throw error;
    }
   
}

module.exports={
    crearArchivo
}