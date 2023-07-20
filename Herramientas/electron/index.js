const { app, BrowersWindow } = require('electron');

let ventanaPrincipal;

app.on('ready', crearVentana);

function crearVentana(){
    ventanaPrincipal = new BrowersWindow({
        width: 800,
        heigth: 600, 
    });

    ventanaPrincipal.loadFile('index.html');
}