
const errorHandler = (err, req, res, next) => {
    console.log(err.message)
    if (err.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted input' })
      } else if (err.name === 'ValidationError') {
        return response.status(400).json({ error: err.message })
      } else if (err.name ===  'JsonWebTokenError') {
        return response.status(400).json({ error: 'token missing or invalid' })
      }

      next(err)
}

module.exports = errorHandler
