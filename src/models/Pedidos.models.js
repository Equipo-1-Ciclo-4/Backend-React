const mongoose = require('mongoose')
const {Schema} = mongoose
const PedidoSchema = new Schema({

    codigoPlato: String,
    nombrePlato: String,
    valorPlato: String,
    cedulacliente: String
})

//Convertir a modelo
module.exports = mongoose.model('pedido', PedidoSchema ) 