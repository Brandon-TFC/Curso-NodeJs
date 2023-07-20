async function hola(nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("Hello, " + nombre);
            resolve(nombre);
          }, 1000);
    });
    
  }
  async function hablar(nombre) {
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log("bla, bla, bla, bla");
            resolve(nombre);
            reject('Hay un error');
          }, 1000);
    })
    
  }
 async function adios(nombre) {
    return new Promise((resolve, reject)=>{
        setTimeout(function() {
            console.log("Adios", nombre);
            resolve();
          }, 1000);
    });
    
  }
  async function main(){
   let nombre = await hola('Brandon');
    await hola();
    await hola();
    await hola();
    await adios(nombre);
    console.log('Termina el proceso');

  }
  console.log('Empezamos el proceso');
  main();
  console.log('Va hacer la 2da instruccion')
  