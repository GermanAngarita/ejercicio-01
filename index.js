const express = require('express');
const routes = require('./router')
const app = express();
const _port = 3000;

app.get('/', (req, res ) => {
    res.status(200).send({
        estatus: 'Servidor corriendo',
        servicios_disponibles: {}
    })
})

app.use('/api', routes);

app.listen( _port, () => {
    console.log('Servidor corriendo en: ', `http://localhost:${_port}`)
} )
