/*
  REFERENCES AND IMPORTS
*/
const PORT = 5000
const express = require('express')
const taskRouter = require('./routes/tasks')

const app = express()

/*
  MIDDLEWARE
*/

// allow access to url params
app.use(express.urlencoded({extended: false}))
// allow access to json parser for APIs
app.use(express.json())

app.use(express.static('./public'))
app.use('/api/v1/tasks', taskRouter)





app.listen(PORT, ()=> {
  console.log(`server listening on PORT ${PORT}`)
})