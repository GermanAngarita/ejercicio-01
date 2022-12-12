const express = require('express');
const frutaController = express.Router();

const frutaModel = require('../modelos/frutas/frutas.model')

/**
 * Fruta model
 * 
 * id: number;
 * nombre: string;
 * color: string;
 * descripcion: string;
 * precio: number;
 */

frutaController.get('/', async ( req, res) => {

    const id = req.query['id'];
    const nombre = req.query['nombre'];
    const color = req.query['color'];
    const descripcion = req.query['descripcion'];
    const precio = req.query['precio'];

    let query = {}
    if (id) query['id'] = id;
    if (nombre) query['nombre'] = nombre;
    if (color) query['color'] = color;
    if (descripcion) query['descripcion'] = descripcion;
    if (precio) query['precio'] = precio;

    let frutas = []
    try {
        frutas = await frutaModel.find( query )
    } catch (error) {
        return res.status(500).send({
            operacion_exitosa: false,
            data: frutas
        })
    }

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


frutaController.put('/', async ( req, res) => {

    const id = req.query['id'];
    const nombre = req.query['nombre'];
    const color = req.query['color'];
    const descripcion = req.query['descripcion'];
    const precio = req.query['precio'];

    // Buscar el elemento
    let existeFruta
    try {
        existeFruta = await frutaModel.findOne({ id: id });
    } catch (error) {
        return res.status(500).send({
            operacion_exitosa: false,
            error: error
        })
    }

    if (existeFruta) {
        // if found, target keyword(s) to be successfully modified

        const frutaActualizar = {
            id: id,
            nombre: nombre ? nombre : existeFruta.nombre,
            color: color ? color : existeFruta.color,
            descripcion: descripcion ? descripcion : existeFruta.descripcion,
            precio: precio ? precio : existeFruta.precio
        }

        try {
            const frutaActualizada = await frutaModel.findByIdAndUpdate(
                { _id: existeFruta._id },
                frutaActualizar,
                { returnOriginal: false }
            )

            return res.status(200).send({
                operacion_exitosa: true,
                data: frutaActualizada
            })
        } catch (error) {
            return res.status(500).send({
                operacion_exitosa: false,
                error: error
            })
        }


        
        
    } else {
        // if not found and create a new document
        const nuevaFruta = new frutaModel({
            id: id,
            nombre: nombre,
            color: color,
            descripcion: descripcion,
            precio: precio
        })

        try {
            const respuesta = await nuevaFruta.save()

            return res.status(201).send({
                operacion_exitosa: true,
                data: respuesta
            })
        } catch (error) {
            return res.status(500).send({
                operacion_exitosa: false,
                error: error
            })
        }
    }
})

frutaController.delete('/', async ( req, res) => {
    const id = req.query['id'];
    try {
        const eliminado = await frutaModel.findOneAndRemove({ id: id });

        if (!eliminado) {
            return res.status(204).send({
                operacion_exitosa: true,
                data: []
            })
        } else {
            return res.status(200).send({
                operacion_exitosa: true,
                data: []
            })
        }
    } catch (error) {
        return res.status(500).send({
            operacion_exitosa: false,
            error: error
        })
    }
})

module.exports = frutaController