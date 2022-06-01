const mysql = require("mysql");
const connection = mysql.createPool({
  host: "localhost", // IP 주소
  port: 3306, // PORT
  user: "root",
  password: "1111",
  database: "maria_db",
});

module.exports = connection;
