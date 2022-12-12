const mongoose = require('mongoose');
const path = 'mongodb://localhost:27017';
const bdd = 'frutas'

const uri = { _arg: '' };
uri._arg += path;
uri._arg += '/';
uri._arg += bdd;

const conectarBDD = () => {
    mongoose.connect( uri._arg, ( error ) => {
        if (error) {
            console.error('Error al conectar a la base de datos', JSON.stringify(error));
        }

        console.info('Conexión exitosa a la base de datos.', bdd );
    })
}

module.exports = conectarBDD
