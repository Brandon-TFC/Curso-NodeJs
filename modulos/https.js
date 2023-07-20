const  http = require('htpp');


http.createServer(router).listen(3000);

function(request, response) {
    console.log('nueva peticion!');
    console.log(request.url);

    switch(request.url) {
        case '/hola':
            response.write('Hola que tal');
            response.end();
            break

        default:
            response.write('Error 404');
            response.end();
    }

    //response.writeHead(201, { 'Content-Type' : 'text/plain'})

    //Escribir respuesta al usuario
   // response.write('Hola estoy usando http de nodeJs');

 //   response.end();
}

console.log('Escuchando http en el puerto 3000.');