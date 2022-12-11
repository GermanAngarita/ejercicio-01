const express = require('express');
const frutaController = express.Router();

const frutaModel = require('../modelos/frutas/frutas.model')

frutaController.get('/', ( req, res) => {
    let frutas = []
    // try {
    //     frutas = await frutaModel.find({})
    // } catch (error) {
    //     return res.status(500).send({
    //         operacion_exitosa: false,
    //         data: frutas
    //     })
    // }

    if (frutas.length === 0) {
        return res.status(204).send({
            operacion_exitosa: false,
            data: []
        })
    }

    return res.status(200).send({
        operacion_exitosa: true,
        data: frutas
    })
})

frutaController.put('/', ( req, res) => {

    // if not found and create a new document
    return res.status(201).send({
        operacion_exitosa: true,
        data: []
    })

    // if found, target keyword(s) to be successfully modified
    return res.status(200).send({
        operacion_exitosa: true,
        data: []
    })
})

frutaController.delete('/', ( req, res) => {

    // if not found and create a new document
    return res.status(201).send({
        operacion_exitosa: true,
        data: []
    })

    // if found, target keyword(s) to be successfully modified
    return res.status(200).send({
        operacion_exitosa: true,
        data: []
    })
})

module.exports = frutaController