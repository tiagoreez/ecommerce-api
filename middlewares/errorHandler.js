function logErrors (err, req, res, next) {
  console.error(err)
  next(err)
}

function errorHandler (err, req, res, next) {
  res.status(500).json({
    message: err.message,
    stack: err.stack
  })
}

function boomErrorHandler (err, req, res, next) {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  } else {
    next(err)
  }
}

function queryErrorHandler (err, req, res, next) {
  if (err.parent) {
    const { errors, fields } = err
    const message = errors[0].message
    res.status(406).json({ message, fields })
  } else {
    next(err)
  }
}

module.exports = { logErrors, errorHandler, boomErrorHandler, queryErrorHandler }
