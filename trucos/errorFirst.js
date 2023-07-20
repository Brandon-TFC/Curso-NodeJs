function asincrona(callback){
    setTimeout(function(){
        try{
            let a = 3 + z;
            callback(null, a);
        } catch (err){
            callback(err);
        }
    }, 1000);
}

    asincrona(function(err, dato){
        if (err) {
            console.error('Tenemos un error');
            console.error(err);
            return false;
    
            //throw err; //No va a funcionar en las funciones asincronas
        }
        console.log('Todo bien', dato);
    })

