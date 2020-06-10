const express = require('express');
const mysqlConnection = require('./src/database');
//settings
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();
app.set("port", PORT);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});

//rutas
//ruta raiz
app.get('/', (req, res) => {
    res.send('welcome to my API');
})
app.get('/home', (req, res) => {
    res.send('<h1>Bienvenidos a la API</h1>');
})
//ruta de los contactos
app.use(require('./src/routes/contacto'));

app.listen(PORT, ()=> console.log(`Server Running in ${PORT}`));
app.use(bodyParser.json());
