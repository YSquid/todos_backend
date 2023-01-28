const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: '0.0.0.0:0',
  database: process.env.DB_DATABASE,
  password: process.env.DB_PW,
  port: process.env.DB_PORT,
});

// const query = (text, params, callback) => pool.query(text, params, callback)

module.exports = pool