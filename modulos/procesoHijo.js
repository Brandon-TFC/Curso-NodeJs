const { exec, spawn } = require ('Child_process');
////const { exec } = require ('Child process').exec;
//
//exec('node modulos/console.js', (err, stdout, sterr) =>{
//    if (err){
//        console.error(err);
//        return false;
//    }
//
//    console.log(stdout);
//})

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('¿Esta muerto?');
    console.log(process.killed);
    console.log(dato.doString());
});

proceso.on('exit', function(){
    console.log('El proceso termino');
    console.log(process.killed);

})
