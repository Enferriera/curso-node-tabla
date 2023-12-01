const argv= require('yargs')
                .options({'b':{
                  alias:'base',
                type:'number',
                description:'ingrese la base que quiere armar la tabla de multiplicar',
                demandOption:true
            },
            'l':{
                alias:'listar',
                type:'boolean',
                describe:'lista la tabla en consola',
                default:false
            },
              h:{
                alias:'hasta',
                type:'number',
                describe:'limite de la tabla',
                default:10
              }
        })
            .check((argv,options)=>{            
                if(isNaN(argv.b)){
                    throw'La base tiene que ser un numero';
                }else if(isNaN(argv.h)){
                    throw'El limite tiene que ser un numero';
                    
                }else{
                    return true
                }
                
            })
            .argv;

module.exports=argv;