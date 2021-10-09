// controller prepare
const Controller = require( '../utility/controller' );
const model = require( '../models/user' );

// additional modules
const passport = require( 'passport' );
const config = require( '../utility/config' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// facebook auth init
controller.auth = passport.authenticate( 'facebook' );

// facebook auth success
controller.callback = passport.authenticate( 'facebook', { failureRedirect: '/' });

// facebook auth success
controller.success = async ( req, res, next ) => {

    try {
        
        // parsing request
        const auth = req.user.id;
        const body = req.user._json;

        // checking database
        const testUser = await controller.model.findOne({ auth: auth });

        // creates user if necessary
        if( !testUser ) {

            // truncation of unnecessary data
            body.picture = body.picture.data.url;

            // creates user object
            const user = await new controller.model({ auth: auth, body: body });

            // deletes secret id from users public data
            delete user.body.id;

            // saves user
            await user.save();
        };

        // returns success status
        // return res.status( 200 ).render( 'auth', { auth: auth, front: config.server.front });

        // redirects to native front server
        return res.status( 300 ).redirect( config.server.front + auth );

    } catch( err ) {

        // error event
        return next( err );
    }
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;