// Initial modules
const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection({
    // Location of database
    host: 'localhost',
    // Username
    user: process.env.DB_USER,
    // Password
    password: process.env.DB_PASSWORD,
    // Database name
    database: "employee_data"
},
console.log('Connected to database')
);

module.exports = db;