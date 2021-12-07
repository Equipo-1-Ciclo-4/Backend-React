const ClienteCtrl = {}
const Cliente = require('../models/Clientes.models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

ClienteCtrl.crear = async (req, res)=>{
    const {nombres, apellidos, cedula, direccion, telefono, correo, contrasena} = req.body
    const NuevoCliente = new Cliente({
        nombres,
        apellidos,
        cedula,
        direccion,
        telefono,
        correo,
        contrasena
    })

 
    const correoCliente= await Cliente.findOne({correo: correo})
    const cedulaCliente = await Cliente.findOne({cedula: cedula})
    if(correoCliente || cedulaCliente){
        res.json({
            mensaje: 'El cliente ya existe'
        })
    }

    else{
        NuevoCliente.contrasena = await bcrypt.hash(contrasena, 10)
        const token = jwt.sign({_id:NuevoCliente._id}, 'Secreta')
        await NuevoCliente.save()
        res.json({
            mensaje: 'Bienvenido',
            id: NuevoCliente.id,
            nombre: NuevoCliente.nombre,
            token
        })
    }
}

ClienteCtrl.login = async(req, res)=>{
    const {correo, contrasena} = req.body
    const cliente = await Cliente.findOne({correo: correo})
    if(!cliente){
        
        return res.json({
            mensaje: 'Correo incorrecto'
        })
    }

    const match = await bcrypt.compare(contrasena, cliente.contrasena)

    if(match){
        const token = jwt.sign({_id: cliente._id}, 'Secreta')
        res.json({
            mensaje: 'Has iniciado sesión',
            id: cliente.id,
            nombres: cliente.nombres,
            token
        })
    }

    else {
        res.json({
            mensaje: 'Contraseña incorrecta'
        })
    }
}


ClienteCtrl.listar = async(req, res)=>{
    const respuesta =  await Cliente.find()
    res.json(respuesta)

}



ClienteCtrl.listarId = async(req, res)=>{
    const id = req.params.id
    const respuesta =  await Cliente.findById({_id:id})
    res.json(respuesta)
}

ClienteCtrl.eliminar = async(req, res)=>{
    const id = req.params.id
    await Cliente.findByIdAndDelete({_id:id})
    res.json({
        mensaje: 'Cliente eliminado'
    })
}

module.exports = ClienteCtrl
