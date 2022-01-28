function testRoute(req,res,next) {
  res.send('it works!')
}

function getAllTasks(req,res,next) {
  // TODO: create API
  res.send('getting all tasks!')

}

function createTask(req,res,next) {
  // TODO: create API
  res.json(req.body)

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