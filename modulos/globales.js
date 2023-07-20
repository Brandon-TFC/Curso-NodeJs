console.log(setInterval);

let i=0;
let intervalo = setInterval(function(){
    console.log('Hola');
    if(i === 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000);


setImmediate(function(){
    console.log('Hola')
});



console.log(process);
console.log(__dirname);
console.log(__filname);

//Solo si es necesario utilizar
global.miVaribale = 'elValor';
console.log(miVaribale);