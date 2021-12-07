const mongoose = require('mongoose');

const {Schema} = mongoose;

const UsuarioSchemma = new Schema({
    nombres: String,
    apellidos: String,
    identificacion: String,
    puesto: String,
    tcontrato: String,
    jefe: String
});

//Convertir a modelo y exporatarlo
module.exports = mongoose.model('usuario', UsuarioSchemma);