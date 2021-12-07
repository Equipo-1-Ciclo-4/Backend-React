const {Router} = require('express')
const router = Router()
const PedidoCtrl = require('../controllers/Pedidos.controllers')

router.post('/crear', PedidoCtrl.crear)
//router.get('/listarMenu', ClienteCtrl.login)

module.exports = router