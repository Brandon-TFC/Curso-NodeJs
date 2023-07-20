function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("Hello, " + nombre);
            resolve(nombre);
          }, 1000);
    });
    
  }
  function hablar(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("bla, bla, bla, bla");
            resolve(nombre);
            reject('Hay un error');
          }, 1000);
    })
    
  }
  function adios(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log("Adios", nombre);
            resolve();
          }, 1000);
    });
    
  }
//--

console.log('Iniciando el proceso...');
hola('Brandon')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) =>{
        console.log('Terminando el proceso...');
    })
    .catch(error =>{
        console.error('Hubo un error');
        console.error(error);
    }) //Asegurarnos del error