const mongoose = require('mongoose')
const {Schema} = mongoose
const MenuSchema = new Schema({

    codigo: String,
    nombre: String,
    valor: String,
    especialidad: String
})

//Convertir a modelo
module.exports = mongoose.model('menu', MenuSchema )