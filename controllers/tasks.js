const Task = require('../models/Task')

function testRoute(req,res,next) {
  res.send('it works!')
}

async function getAllTasks(req,res,next) {
  try {
    const tasks = await Task.find({})
    res.status(200).json({tasks}) 
  } catch (error) {
    res.status(500).json({msg: error})
    
  }

}

async function createTask(req,res,next) {
  try {
    const task = await Task.create(req.body)
    res.status(201).json({task})
    
  } catch (error) {
    res.status(500).json({msg: error})
  }

}

function getTaskByID(req,res,next) {
  // TODO: create API
  res.json({id: req.params.id})

}

function updateTask(req,res,next) {
  // TODO: create API
  res.send('updating task')

}

function deleteTask(req,res,next) {
  // TODO: create API
  res.send('deleting task')

}

module.exports = {
  testRoute, 
  getAllTasks, 
  createTask,
  getTaskByID,
  updateTask,
  deleteTask
}