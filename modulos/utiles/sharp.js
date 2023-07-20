//Manejamos imagenes
const sharp = require('sharp')


sharp("Archivo que vamos a manejar")
    .resize(80)
    .toFile(resized.png) //Crea y guarda la imagen a la escala que manejemos