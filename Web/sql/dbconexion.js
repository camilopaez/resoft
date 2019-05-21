const mysql = require('mysql');

module.exports= () => {
    return mysql.createConnection({
        host:'resoftbd.mysql.database.azure.com',
        user:'resoft@resoftbd',
        password:'rebd123*',
        database:'mydb',
        port:'3306',
        ssl:true

    })
}