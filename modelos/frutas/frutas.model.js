const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FrutaSchema = new Schema({
    id: { type: Number, default: 0 },
    nombre: { type: String, default: '', trim: true },
    color: { type: String, default: '', trim: true },
    descripcion: { type: String, default: '' },
    precio: { type: Number, default: 0 } 
})

const frutaModel = mongoose.model('fruta', FrutaSchema );
module.exports = frutaModel;
