const express = require('express');
const mysqlConnection = require('./src/database');
//settings
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3050;
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//rutas
//ruta raiz
app.get('/', (req, res) => {
    res.send('welcome to my API');
})
//ruta de los contactos
app.use(require('./src/routes/contacto'));

app.listen(PORT, ()=> console.log(`Server Running in ${PORT}`));
app.use(bodyParser.json());
