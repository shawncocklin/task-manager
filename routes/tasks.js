const express = require('express')
const {testRoute, 
  getAllTasks, 
  createTask,
  getTaskByID,
  updateTask,
  deleteTask} = require('../controllers/tasks')

const router = express.Router()

router.get('/', getAllTasks)
router.post('/', createTask)

router.get('/:id', getTaskByID)
router.patch('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
