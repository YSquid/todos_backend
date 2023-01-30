const supabase = require('./database')

const create = async (description) => {
  const {error} = await supabase
  .from('todos')
  .insert({description: description})
};

const get = async () => {
   const {data} = await supabase.from('todos').select();
   const jsonData = JSON.stringify(data);
   return jsonData;
};

const remove = async (id) => {
    const {error} = await supabase
    .from('todos')
    .delete()
    .eq('todo_id', id)
};

module.exports = {
    create,
    get,
    remove
}
