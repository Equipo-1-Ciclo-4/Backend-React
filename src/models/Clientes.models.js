const mongoose = require('mongoose')
const {Schema} = mongoose
const ClienteSchema = new Schema({

    nombres: {type: String, require: true},
    apellidos: {type: String, require: true},
    cedula: {type: String, require: true},
    direccion:{type: String, require: true},
    telefono: {type: String, require: true},
    correo: {type: String, require: true},
    contrasena:{type: String, require: true}
})

//Convertir a modelo
module.exports = mongoose.model('cliente', ClienteSchema )