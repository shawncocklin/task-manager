function asyncWrapper(fn) {
  return async (req,res,next) => {
    try {
      await fn(req,res,next)
    } catch (error) {
      // passes the error object to the next middleware function that is called, in our case the handleError 
      // function from error-handler
      next(error)
    }
  }
}

module.exports = asyncWrapper