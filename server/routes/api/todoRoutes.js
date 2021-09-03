const router = require('express').Router();
const db = require('../../model');

router.get('/', async(req, res) => {
    const data = await db.Todo.find({});

    res.status(200).json(data);
})
