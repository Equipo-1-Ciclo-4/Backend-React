const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/prueba';
//const uri = 'mongodb://juanme:isajuan0509@cluster0-shard-00-00.ndspf.mongodb.net:27017,cluster0-shard-00-01.ndspf.mongodb.net:27017,cluster0-shard-00-02.ndspf.mongodb.net:27017/prueba?ssl=true&replicaSet=atlas-wmom2y-shard-0&authSource=admin&retryWrites=true&w=majority';

const options = {useNewUrlParser: true, useUniFiedTopology: true};

mongoose.connect(uri, options).then(
    () => { console.log('Conectado a DB');},
    err => { console.log(err);}
);

module.exports = mongoose;
