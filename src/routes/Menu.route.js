const {Router} = require('express')
const router = Router()
const MenuCtrl = require('../controllers/Menu.controllers')

router.post('/crear', MenuCtrl.crear)
router.get('/listarMenu', MenuCtrl.listar)
//router.put('/editar', MenuCtrl.editar)

module.exports = router