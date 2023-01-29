const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: 'postgres',
  host: '172.16.1.75',
  database: 'todos',
  password: 'postgres',
  port: '5432',
});

// const query = (text, params, callback) => pool.query(text, params, callback)

module.exports = pool