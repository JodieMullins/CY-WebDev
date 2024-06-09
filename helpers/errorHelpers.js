const logRepo = require("../repos/logRepo");



let errorHelpers = {

    // CORRESPONDING TO INDEX.JS
/*
    logErrorsToConsole: function (err, req, res, next) {
        console.error("Log Entry: " + JSON.stringify(errorHelpers.errorBuilder(err)));
        console.error("*".repeat(80));
        next(err)
    },
    */

    // MAY NEED CORRECTION
    /* logErrorsToFile: function (err, req, res, next) { */
  logErrorsToFile: function (err, req, res, next) {
    let errorObject = errorHelpers.errorBuilder(err);
    errorObject.requestInfo = {
        // add request information
        // for host, path, and app
      "hostname": req.hostname,
      "path": req.path,
      "app": req.app,
    }
    logRepo.write(errorObject, function (data) {
      console.log(data);
    }, function (err) {
      console.error(err);
    });
    next(err)
  },
  // check request object for errors
  clientErrorHandler: function (err, req, res, next) {
    if (req.xhr) {
      res.status(500).send({
        "status": 500,
        "statusText": "Internal Server Error",
        "message": "XMLHttpRequest error",
        "error": {
          "errno": 0,
          "call": "XMLHttpRequest Call",
          "code": "INTERNAL_SERVER_ERROR",
          "message": "XMLHttpRequest error"
        }
      });
    } else {
      next(err);
    }
  },
  // last function in the chain
  errorHandler: function (err, req, res, next) {
    res.status(500).json(errorHelpers.errorBuilder(err));
  },

  // remove from index.js
  errorBuilder: function (err) {
    return {
      "status": 500,
      "statusText": "Internal Server Error",
      "message": err.message,
      "error": {
        "errno": err.errno,
        "call": err.syscall,
        "code": "INTERNAL_SERVER_ERROR",
        "message": err.message
      }
    };
  }
};
// export
module.exports = errorHelpers;