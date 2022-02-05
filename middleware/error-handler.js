const {CustomAPIError} = require('../errors/custom-errors')

function handleError(err,req,res,next) {
  if(err instanceof CustomAPIError) {
    return res.status(err.status).json({msg:err.message})
  }
  return res.status(500).json({msg: `Something went wrong`})
}

module.exports = handleError