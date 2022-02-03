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

async function getTaskByID(req,res,next) {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOne({_id:taskID})
    if(!task) {
      return res.status(404).json({msg: `cannot find task with id: ${taskID}`})
    }
    res.status(200).json({task}) 
  } catch (error) {
    res.status(500).json({msg: error})
  }

}

async function updateTask(req,res,next) {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new: true,
      runValidators: true
    })
    if(!task) {
      return res.status(404).json({msg: `cannot find task with id: ${taskID}`})
    }
    
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({msg: error})
  }

}

async function deleteTask(req,res,next) {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndDelete({_id:taskID})
    if(!task) {
      return res.status(404).json({msg: `cannot find task with id: ${taskID}`})
    }
    // provide visibility for testing purposes
    res.status(200).json({task}) 
  } catch (error) {
    res.status(500).json({msg: error})
  }
}

module.exports = {
  testRoute, 
  getAllTasks, 
  createTask,
  getTaskByID,
  updateTask,
  deleteTask
}