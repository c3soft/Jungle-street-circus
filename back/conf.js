const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Rootroot@123',
  database: 'opus'
});
module.exports = connection;
