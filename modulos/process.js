//const process = require('process');


process.on('beforexit',() => {
    console.log('El proceso va a terminar');
});


process.on('exit',() => {
    console.log('El proceso acabo');
    setTimeout(() =>{
        console.log('Jamas de vera')
    }, 0); //Ya que antes de desconecta del evenloop y no se podra ver nunca
});



setTimeout(() =>{
    console.log('Si se vera');
}, 0); 

process.on('uncaughtException', (err, origen) =>{
    console.error('Se olvido capturar el error');
    setTimeout(() =>{
        console.log('Esto viene desde las excepciones');
    }, 0); 
});

functionQueNoExiste();

console.log('Si el error no se captura no sale');
