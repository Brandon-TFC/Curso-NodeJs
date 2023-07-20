function hola (nombre, micallback){
    console.log('Hola asincrona');
    setTimeout(function() {
        console.log('hola '+ nombre );
        micallback(nombre);
    }, 1500);
}

function adios(nombre, otrocallback){
    setTimeout(function(){
        console.log('adios '+ nombre);
        otrocallback();
    }, 1000);
}

console.log('Iniciando');
hola('Brandon', function(nombre){
    adios(nombre, function(){
        console.log('terminando...');    
    });
        
});