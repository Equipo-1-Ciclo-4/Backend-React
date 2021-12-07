const PedidoCtrl = {}
const Pedido = require('../models/Pedidos.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

PedidoCtrl.crear = async (req, res)=>{
    const { codigoPlato, nombrePlato, valorPlato, cedulacliente } = req.body
    const NuevoPedido = new Pedido({
        codigoPlato,
        nombrePlato,
        valorPlato,
        cedulacliente
    })

    NuevoPedido.save()
        res.json({
            mensaje: 'Pedido Creado'
        })
    

}



module.exports = PedidoCtrl

