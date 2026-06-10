import localizationString from '../utils/en-us.js'

const errorHandler = (err, req, res, next) => {
   const errorStatus = err.statusCode || 500;
   res.status(errorStatus).json({
    success: false,
    message: err.message || localizationString.INTERNAL_SERVER_ERROR
   })
}

export default errorHandler;