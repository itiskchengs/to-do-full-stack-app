  const router = require('express').Router()
const Todo = require('../../model/Todo')

//localhost:3001/api/todos/
router.get('/', async (req, res) => {
  const data = await Todo.find({})
  console.log('data!!!', data)
  res.status(200).json(data)
})

module.exports = router