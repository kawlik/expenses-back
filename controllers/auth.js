// controller prepare
const Controller = require( '../utility/controller' );
const model = require( '../models/user' );

// additional modules
const config = require( '../utility/config' );
const crypto = require( 'crypto' );
const passport = require( 'passport' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// facebook auth init
controller.auth = passport.authenticate( 'facebook' );

// facebook auth success
controller.callback = passport.authenticate( 'facebook', { failureRedirect: '/', auth_type: 'reauthenticate', auth_nonce: Date.now(), });

// facebook auth success
controller.success = async ( req, res, next ) => {

    try {
        
        // parsing request
        const base = req.user.id;
        const body = req.user._json;

        // const auth provider
        const provider = 'facebook';

        // generating hash
        const auth = crypto.createHash( 'sha256' ).update( base + provider ).digest( 'hex' );

        // checking database
        const testUser = await controller.model.findOne({ auth: auth });

        // creates user if necessary
        if( !testUser ) {

            // profile picture revrite
            body.picture = new URL( `https://graph.facebook.com/${ base }/picture?type=square` );

            // creates user object
            const user = await new controller.model({ auth: auth, body: body });

            // deletes secret id from users public data
            delete user.body.id;

            // saves user
            await user.save();
        };

        // sends secret auth via cookie
        res.cookie( 'auth', auth, config.session.cookie );

        // final response
        return res.status( 300 ).redirect( '/' );

    } catch( err ) {

        // error event
        return next( err );
    }
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;