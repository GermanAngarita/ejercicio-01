const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const prepararData = require('./prepare-data');
const path = 'mongodb://localhost:27017';
// const path = 'mongodb://mongodb:27017'
const bdd = 'frutas'

const uri = { _arg: '' };
uri._arg += path;
uri._arg += '/';
uri._arg += bdd;

const conectarBDD = () => {
    return new Promise( ( resolve ) => {
        mongoose.connect( 
            uri._arg,
            {
                useNewUrlParser: true, 
                useUnifiedTopology: true 
            }, 
            ( error ) => {
            if (error) {
                console.error('Error al conectar a la base de datos', JSON.stringify(error));
                return resolve(false)
            }
    
            console.info('Conexión exitosa a la base de datos.', bdd );
            prepararData()
            return resolve(true);
    
        })
    } )
    
}

module.exports = conectarBDD
