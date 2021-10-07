// passport prepare
const passport = require( 'passport' );
const Strategy = require( 'passport-facebook' ).Strategy;

// std app config
const config = require( './config' );


/*  Facebook init middleware
/*   *   *   *   *   *   *   *   *   *   */

const facebook = ( req, res, next ) => {

    try {

        // facebook persist and retrieve user data 
        passport.serializeUser(( user, callback ) => callback( null, user ));
        passport.deserializeUser(( obj, callback ) => callback( null, obj ));

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