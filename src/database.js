const mysql = require('mysql');
//conexion a bd

/*ba9580d1cf9a56 = user
:425c9d47 = pass
@us-cdbr-east-05.cleardb.net = host
/heroku_bb72c7fbf7e6685 = database*/
var connection
function handleDisconnect(){
    connection = mysql.createConnection({
        host: 'us-cdbr-east-05.cleardb.net',
        user: 'ba9580d1cf9a56',
        password: '425c9d47',
        database: 'heroku_bb72c7fbf7e6685'
    });
    connection.connect((err)=>{
        if(err){
            console.log('error de conexion', err);
            setTimeout(handleDisconnect, 2000);
        }else{
            console.log('Conexion a DB correcta');
            
        }
    });
    connection.on('error', (err)=>{
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    });
}
handleDisconnect();



/*connection.connect(error => {
    if(error){
        console.log("Hay un error en la conexion");
    }
});*/

module.exports = connection;