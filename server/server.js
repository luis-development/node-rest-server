require('./config/config');


const express = require('express');
const mongoose = require('mongoose');


const app = express();
const bodyParser = require('body-parser');

// parse apllication/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse aplication/json
app.use(bodyParser.json())

// importar y usar rutas de usuario
app.use(require('./routes/usuario'))

mongoose.connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, res) => {

    if (err) throw err;

    console.log('Base de datos online');

});



app.listen(process.env.PORT, () => {
    console.log('Escuchando en el puerto: ', 3000);
});