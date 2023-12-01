const {crearArchivo}=require('./utils/multiplicar.js');
const argv=require('./config/yargs.js');
console.clear();

const {base,listar,hasta}=argv;

crearArchivo(base,listar,hasta).then(nombreArchivo=>{
    console.log(nombreArchivo);
}).catch(error=>{
    console.error(error);
})

