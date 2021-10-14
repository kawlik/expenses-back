// passport prepare
const passport = require( 'passport' );
const Strategy = require( 'passport-facebook' ).Strategy;

// std app config
const config = require( './config' );


/*  Facebook init middleware
/*   *   *   *   *   *   *   *   *   *   */

const facebook = ( req, res, next ) => {

    try {

        // passport serialization
        passport.serializeUser(( user, done ) => done( null, user ));
        passport.deserializeUser(( user, done ) => done( null, user ));

        // facebook passport start
        passport.use( new Strategy( config.passport, ( accessToken, refreshToken, profile, done ) => done( null, profile )));

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