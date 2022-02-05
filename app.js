/*
  REFERENCES AND IMPORTS
*/
const PORT = process.env.PORT || 5000
const express = require('express')
const taskRouter = require('./routes/tasks')
const {connectDB} = require('./db/connect')
const notFound = require('./middleware/not-found')
const handleError = require('./middleware/error-handler')
require('dotenv').config()

const app = express()

/*
  MIDDLEWARE
*/
// allow access to url params
app.use(express.urlencoded({extended: false}))
// allow access to json parser for APIs
app.use(express.json())
// renders static files to the root page
app.use(express.static('./public'))

/*
  ROUTES
*/
app.use('/api/v1/tasks', taskRouter)
app.use(notFound)
app.use(handleError)

/*
  OTHER LOGIC
*/
// holds of connecting the server until AFTER being connected to the database
async function start() {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(PORT, ()=> console.log(`server listening on port ${PORT}...`))
  } catch(err) {
    console.log(err)
  }
}

start()