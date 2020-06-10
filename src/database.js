const mysql = require('mysql');
//conexion a bd

/*ba9580d1cf9a56 = user
:425c9d47 = pass
@us-cdbr-east-05.cleardb.net = host
/heroku_bb72c7fbf7e6685 = database*/
var connection = mysql.createConnection({
    host: 'us-cdbr-east-05.cleardb.net',
    user: 'ba9580d1cf9a56',
    password: '425c9d47',
    database: 'heroku_bb72c7fbf7e6685'
});
connection.connect(error => {
    if(error){
        console.log("Hay un error en la conexion");
    }else{
        console.log('Conexion a DB correcta');
        
    }
});

module.exports = connection;