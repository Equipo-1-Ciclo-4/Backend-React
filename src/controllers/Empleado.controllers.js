const EmpleadoCtrl = {};

const Empleado = require('../models/Usuario.models');

EmpleadoCtrl.crear = async(req, res)=>{
    const {nombres, apellidos, identificacion, puesto, tcontrato, jefe}=req.body;

    const NuevoEmpleado = new Empleado({
        nombres,
        apellidos,
        identificacion,
        puesto,
        tcontrato,
        jefe
    });

    const respuesta = await NuevoEmpleado.save();
    res.json({
        mensaje: 'El empleado fue creado',
        respuesta
    });
};

EmpleadoCtrl.listar = async(req, res)=>{
    const respuesta = await Empleado.find();
    res.json(respuesta);
};

EmpleadoCtrl.listarId = async(req, res)=>{
    const id = req.params.id;
    const respuesta =  await Empleado.findById({_id:id});
    res.json(respuesta);
};

EmpleadoCtrl.empleadoDeunJefe = async(req, res)=>{
    const id = req.params.id;
    const respuesta =  await Empleado.find({jefe:id});
    res.json(respuesta);
};

EmpleadoCtrl.eliminar = async(req, res)=>{
    const id = req.params.id;
    await Empleado.findByIdAndDelete({_id:id});
    res.json({
        mensaje: 'Empleado eliminado'
    });
};

EmpleadoCtrl.actualizar = async(req, res)=>{
    const id = req.params.id;
    await Empleado.findByIdAndUpdate({_id:id}, req.body);
    res.json({
        mansaje: 'Empleado Actualizado'
    });
    
};

EmpleadoCtrl.buscarEmpleado = async(req, res)=>{
    const nombres = req.params.nombres;
    const respuesta = await Empleado.findOne({nombres:{ $regex:".*" +nombres+ ".*"}});
    res.json(respuesta);
};

module.exports = EmpleadoCtrl;
