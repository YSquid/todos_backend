const pg = require('pg')
require('dotenv').config();
const CONNECTION_STRING = process.env.CONNECTION_STRING

const client = new pg.Client(CONNECTION_STRING);
// const query = (text, params, callback) => pool.query(text, params, callback)

module.exports = client
