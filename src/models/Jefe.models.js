const mongoose = require('mongoose');

const {Schema} = mongoose;

const JefeSchemma = new Schema({
    nombre: String,
    correo: String,
    contrasena: String
});

//Convertir a modelo y exporatarlo
module.exports = mongoose.model('jefe', JefeSchemma);