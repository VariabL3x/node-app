const express = require('express');
const router = express.Router();
const todoController = require('../controllers/TodoCtrl');

router.get('/',todoController.get_all_todos)

router.get('/create',todoController.create_todos)

router.get('/:id',todoController.get_one_todo)

router.delete('/:id',todoController.delete_one_todo)

router.post('/',todoController.create_one_todo)

module.exports = router;