// controller prepare
const Controller = require( '../utility/controller' );

// additional modules
const config = require( '../utility/config' );

// controller init
const controller = new Controller();


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// renders home page
controller.renderHomePage = async ( req, res, next ) => {

    try {

        // proper render
        return res.render( 'home' , { docs: config.server.swagger });

    } catch( err ) {

        // error event
        return next( err );
    }
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;