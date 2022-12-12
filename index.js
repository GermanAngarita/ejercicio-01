const express = require('express');
const routes = require('./router');
const config = require('./config');


const app = express();
const _hostname = '0.0.0.0'
const _port = 3001;

app.use( express.json())
app.get('/', (req, res ) => {
    res.status(200).send({
        estatus: 'Servidor corriendo',
        servicios_disponibles: {}
    })
})

app.use('/api', routes);

app.listen( _port, _hostname, async () => {
    try {
        const conexionExitosa = await config();
        console.log('conexionExitosa: ', conexionExitosa)
        
    } catch (error) {
        console.log('No se pudo conectar a la base de datos: ', JSON.stringify(error))
    }
    
    console.log('Servidor corriendo en: ', `http://${_hostname}:${_port}`)
} )
