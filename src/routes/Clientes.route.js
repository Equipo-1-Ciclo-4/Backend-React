const {Router} = require('express')
const router = Router()
const ClienteCtrl = require('../controllers/Clientes.controllers')

router.post('/crear', ClienteCtrl.crear)
router.post('/login', ClienteCtrl.login)
router.get('/listarClientes',ClienteCtrl.listar)
router.get('/listar/:id', ClienteCtrl.listarId)
router.delete('/eliminar/:id',ClienteCtrl.eliminar)

module.exports = router