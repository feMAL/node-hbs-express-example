const hbs = require('hbs')

//HBS Helper
hbs.registerHelper('getFecha', () => new Date().getFullYear());

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    console.log(palabras)
    palabras.forEach((element,index) => {
        palabras[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });
    return palabras.join(' ')
});

module.exports = hbs