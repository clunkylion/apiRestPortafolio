const express = require('express');
const router = express.Router();
const mysqlConnection = require('../database');

//mostrar
router.post('/contacto', (req,res) =>{
    const sql = 'select * from contacto';
    mysqlConnection.query(sql, (err, results)=>{
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
//buscar por id
router.post('/contacto/:id', (req,res) =>{
    const {id} = req.params;
    const sql = `select * from contacto where id = ${id}`;
    mysqlConnection.query(sql, (err, result)=>{
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
//agregar
router.post('/add', (req,res) =>{
    const sql = 'insert into contacto set ?';
    const contactObj = {
        nombreCliente: req.body.nombreCliente,
        mailCliente: req.body.mailCliente,
        fecha: req.body.fecha, 
        idea: req.body.idea
    };
    mysqlConnection.query(sql, contactObj, error => {
        if(error){
            res.send('error no se puede crear');
        }else{
            res.send('se creo correctamente');
        }
    })
})
//actualizar
router.put('/update/:id', (req,res) =>{
    res.send('actualizar usuarios');
})
//eliminar
router.delete('/delete', (req,res) =>{
    res.send('borrar usuarios');
})

module.exports = router;