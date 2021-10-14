// controller prepare
const Controller = require( '../utility/controller' );

// additional modules
const config = require( '../utility/config' );
const path = require( 'path' );

// controller init
const controller = new Controller();


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// renders app
controller.renderAppPage = async ( req, res, next ) => {

    try {

        // proper render
        return res.sendFile( paht.join( __dirname, '../public/index.html' ));

    } catch( err ) {

        // error event
        return next( err );
    }
};


// renders home page
controller.renderDocsPage = async ( req, res, next ) => {

    try {

        // proper render
        return res.render( 'docs', { docs: config.server.swagger });

    } catch( err ) {

        // error event
        return next( err );
    }
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;