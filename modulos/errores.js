function otraFuncion(){
     seRompe();
}


function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function(){
        try{
        return 3 + z;
        }catch (err){
            console.error('Error funcion asincrona');
            cb(err);

        }
    })
}


try{
    //otraFuncion();
    seRompeAsincrona(function(err){
        console.log(err.message)
    });
} catch(err){
    console.error('Algo se ha roto');
    console.error(err);
    console.log('Capturado')
}
console.log('Final here');