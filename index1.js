const express = require('express')
const app = express()

const morgan = require('morgan')
const cors = require('cors')
const bodyparser = require('body-parser')

require('./database')

app.set('Port', process.env.PORT || 3000)
app.use(morgan('dev'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(cors({origen: '*'}))

app.use('/admin', require('./routes/Admin.route'))
app.use('/cliente', require('./routes/Clientes.route'))
app.use('/menu', require('./routes/Menu.route'))
app.use('/pedido', require('./routes/Pedidos.route'))

app.listen(app.get('Port'), ()=> {
    console.log('Escucando por el puerto', app.get('Port'))
})