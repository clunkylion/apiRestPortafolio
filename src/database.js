const mysql = require('mysql');
//conexion a bd
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_portafolio'
});
connection.connect(error => {
    if(error){
        console.log("Hay un error en la conexion");
    }else{
        console.log('Conexion a DB correcta');
        
    }
});

module.exports = connection;