const {Router} = require('express');

const router = Router();

const EmpleadoCtrl = require('../controllers/Empleado.controllers');
const Auth = require('../helper/Auth');


router.post('/crear', EmpleadoCtrl.crear);
router.get('/listarEmpleados', EmpleadoCtrl.listar);
router.get('/listar/:id', EmpleadoCtrl.listarId);
router.get('/listarEmpleadosJefe/:id', EmpleadoCtrl.empleadoDeunJefe);
router.delete('/eliminarEmpleado/:id',EmpleadoCtrl.eliminar);
router.put('/actualizar/:id', EmpleadoCtrl.actualizar);
router.get('/buscar/:nombres', Auth.verificarToken, EmpleadoCtrl.buscarEmpleado);


module.exports = router;