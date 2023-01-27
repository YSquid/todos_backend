const client = require('./database');
client.connect();

const create = (description) => {
  client.query('INSERT INTO todos (description) VALUES ($1) RETURNING *', [
    description,
  ]);
};

const get = () => {
   return client.query('SELECT * FROM todos')
};

const remove = (id) => {
    client.query("DELETE FROM todos WHERE todo_id = $1", [id])
};

module.exports = {
    create,
    get,
    remove
}
