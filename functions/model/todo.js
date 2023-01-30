const supabase = require('./database')

const create = (description) => {
  pool.query('INSERT INTO todos (description) VALUES ($1) RETURNING *', [
    description,
  ]);
};

const get = async () => {
   const {data} = await supabase.from('todos').select();
   const jsonData = JSON.stringify(data);
   return jsonData;
};

const remove = (id) => {
    pool.query("DELETE FROM todos WHERE todo_id = $1", [id])
};

module.exports = {
    create,
    get,
    remove
}
