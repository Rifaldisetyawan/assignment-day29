const mysql      = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Rifaldisetyawan',
  database : 'assignment_day29',
  port     : '3306'
});

module.exports = connection;