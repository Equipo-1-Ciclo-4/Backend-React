const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

require('./database')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use('/jefe', require('./src/routes/Jefe.route'))
app.use('/empleado',require('./src/routes/Empleado.route'))
app.use('/admin', require('./src/routes/Admin.route'))
app.use('/cliente', require('./src/routes/Clientes.route'))
app.use('/menu', require('./src/routes/Menu.route'))
app.use('/pedido', require('./src/routes/Pedidos.route'))

//Puerto
app.set('puerto', process.env.PORT || 4000);
app.listen(app.get('puerto'), function(){
    console.log('Example app listening on port ' + app.get('puerto'))
});
