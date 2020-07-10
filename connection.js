
const mysql= require('mysql') 

const connection= mysql.createConnection({
    host:"intermingle.ccyciftfcphy.us-east-2.rds.amazonaws.com",
    user:"admin",
    password:"password123!!!",
    database:"InternMingle"
});

module.exports = connection;


