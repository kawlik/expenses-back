// passport prepare
const passport = require( 'passport' );
const Strategy = require( 'passport-facebook' ).Strategy;

// std app config
const config = require( './config' );


/*  Facebook init middleware
/*   *   *   *   *   *   *   *   *   *   */

const facebook = ( req, res, next ) => {

    try {

        // facebook passport start
        passport.use( new Strategy( config.passport, ( accessToken, refreshToken, profile, callback ) => callback( null, profile )));

        // next event
        return next();

    } catch( err ) {

        // error event
        return next( err );
    };
};


/*  Facebook export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = facebook;