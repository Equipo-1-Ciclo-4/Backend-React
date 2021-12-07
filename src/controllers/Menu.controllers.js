const MenuCtrl = {}
const Menu = require('../models/Menu.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

MenuCtrl.crear = async (req, res)=>{
    const {codigo, nombre, valor, especialidad} = req.body
    const NuevoMenu = new Menu({
        codigo,
        nombre,
        valor,
        especialidad
    })

    const codigoMenu= await Menu.findOne({codigo: codigo})
    const nombrePlato = await Menu.findOne({nombre: nombre})
    if(codigoMenu || nombrePlato){
        res.json({
            mensaje: 'El plato ya existe en el menú'
        })
    }

    else {
        await NuevoMenu.save()
        res.json({
            mensaje: 'Plato creado'
        })
    }

}

MenuCtrl.listar = async(req, res)=> {
    const respuesta =  await Menu.find()
    res.json(respuesta)
}



module.exports = MenuCtrl

