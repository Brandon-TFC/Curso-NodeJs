let nombre = process.env.NOMBRE || 'Sin nombre'; //Tenemos que agregar en la terminal $env:NOMBRE="Brandon", dependiendo de la terminal que tengas en este caso es powershell
let web = process.env.WEB || 'No tengo web'; //Mismo procedimiento que el comentario de arriba 

console.log('hola ' + nombre);
console.log('Mi web ' + web);
