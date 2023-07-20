const puppeteer = require('puppeteer');

(async() =>{

    console.log('Navegador');
    const browser = await puppeteer.launch({headless: false});



    const page = await browser.newPage();

    await page.goto('https://es.wikipedia.org/wiki/Node.js')
    console.log('Cerramos navegador...');
    //browser.close();
    console.log('navegador cerrado ...');
}) ();