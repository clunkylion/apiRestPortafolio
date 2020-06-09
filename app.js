const express = require('express');
const mysql = require('mysql');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3050;

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//conexion a bd
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'joseCortes'
});
connection.connect(error => {
    if(error){
        console.log("Hay un error en la conexion");
    }else{
        console.log('Conexion a DB correcta');
        
    }
});

//rutas
app.get('/', (req, res) => {
    res.send('welcome to my API');
})
//usuarios
app.post('/contacto', (req,res) =>{

    const sql = 'select * from contactos';
    connection.query(sql, (err, results)=>{
        if (!err){
            console.log("Hay un error en la conexion");
        }
        if (results.length > 0) {
            res.json(results);
        }else{
            res.send('no hay resultados');
        }
    });
});

app.post('/contacto/:id', (req,res) =>{
    const {id} = req.params;
    const sql = `select * from contactos where id = ${id}`;
    connection.query(sql, (err, result)=>{
        if (!err){
            console.log("Hay un error en la conexion");
        }
        if (result.length > 0) {
            res.json(result);
        }else{
            res.send('no hay resultados');
        }
    });
})


app.post('/add', (req,res) =>{
    const sql = 'insert into contactos set ?';
    const contactObj = {
        nombreCliente: req.body.nombreCliente,
        mailCliente: req.body.mailCliente,
        fecha: req.body.fecha, 
        idea: req.body.idea
    };
    connection.query(sql, contactObj, error => {
        if(error){
            res.send('error no se puede crear');
        }else{
            res.send('se creo correctamente');
        }
    })

})
app.put('/update/:id', (req,res) =>{
    res.send('actualizar usuarios');
})
app.delete('/delete', (req,res) =>{
    res.send('borrar usuarios');
})


app.listen(PORT, ()=> console.log(`Server Running in ${PORT}`));
app.use(bodyParser.json());
