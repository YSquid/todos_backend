const express = require('express');
const cors = require('cors')

const router = express.Router();
const { create, read, removeTodo } = require('../controller');

router.get('/', (req, res) => {
    res.send({data: "Test message"})
})

router.get('/todos', read);

router.post('/todo/create', cors(), create);

router.delete('/todo/:id', cors(), removeTodo)

module.exports = router;