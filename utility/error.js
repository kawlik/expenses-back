/*  Error 404 handler
/*   *   *   *   *   *   *   *   *   *   */

exports.notFound = async ( req, res, next ) => {

    // creating error
    const err = new Error( '404 : Resource not found.' );
    
    // error proper status code
    err.status = 404;

    // error event
    return next( err );
};


/*  Global error handler
/*   *   *   *   *   *   *   *   *   *   */

exports.catchAll = async ( err, req, res, next ) => {

    // error proper status code
    res.status( err.status || 500 );

    // global on error final response
    res.json({ statusText: 'FAIL', success: false, message: err.message });
};


/*  Config export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = exports;