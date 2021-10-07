// std app refrence
const app = require( './app' );

// std app config
const config = require( './utility/config' );


/*  Server start
/*   *   *   *   *   *   *   *   *   *   */

// server port setup
app.set( 'port', config.server.port );

// server start listening
app.listen( app.get( 'port' ), ( err ) => {

    // on error event
    if( err ) { return console.error( err.message ); }

    // on connect console information
    console.log( 'Server started successfully!' );
});