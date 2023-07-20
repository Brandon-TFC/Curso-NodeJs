const fs = require('fs');

function leer(ruta, cb){
    fs.readFile(ruta, (err, data) =>{
        //Leido
        cb(data.toString());
    })
}

function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err){
            console.error('No he podido escirbirlo', err);
        } else{
            console.log('Se ha escrito correctamente.')
        }
    });
}

function eliminar (ruta, cb){
    fs.unlink(ruta, cb); //Disvincula los nodos de la ruta
}


//escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log)
//leer(__dirname + '/archivo1.txt',console.log)
eliminar(__dirname + '/archivo1.txt', console.log)