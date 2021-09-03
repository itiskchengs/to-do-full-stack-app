const db = require('../config/connection');
const { Todo } = require('../model');

const todoData = require('./todoData.json');

db.once('open', async () => {
  await Todo.deleteMany({});

  const todos = await Todo.insertMany(todoData);

  console.log('todos', todos);
  console.log('count', todos.length);

  console.log('Todos seeded!');
  process.exit(0);
});
