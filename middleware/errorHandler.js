const ErrorHandler = (err, req, res, next) => {
    let message = err.message;
    let statuscode = err.statuscode;

    res.status(statuscode).json({
        message,
        statuscode,
        success: "failed"
    })
    next()
}

export default ErrorHandler