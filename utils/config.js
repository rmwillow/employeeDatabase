// Dependencies
const mysql = require('mysql2');

// Connection to server
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Lemon123',
  database: 'employees'
});

// Export
module.exports = connection;