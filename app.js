// core modules
const cors = require( 'cors' );
const express = require( 'express' );
const mongoose = require( 'mongoose' );
const passport = require( 'passport' );
const parser = require( 'cookie-parser' );
const session = require( 'express-session' );

// swagger modules
const swaggerJsDoc = require( 'swagger-jsdoc' );
const swaggerUi = require( 'swagger-ui-express' );

// local modules
const config = require( './utility/config' );
const error = require( './utility/error' );
const facebook = require( './utility/facebook' );

// local routers
const routerIndex = require( './routes/index' );

const routerAuth = require( './routes/auth' );
const routerExpense = require( './routes/expense' );
const routerList = require( './routes/list' );
const routerUser = require( './routes/user' );



/*  App init
/*   *   *   *   *   *   *   *   *   *   */

// seting up app
const app = express();

// seting up db
mongoose.connect( config.db.link, config.db.options, async ( err ) => {

    // connection error
    if( err ) { return console.error( err ); }

    // connection success
    return console.log( 'DB connected successfully!' );
});

// swagger setup
const swaggerDocs = swaggerJsDoc({ swaggerDefinition: config.swagger, apis: [ './routes/*.js' ] });
app.use( '/swagger', swaggerUi.serve, swaggerUi.setup( swaggerDocs ));


/*  Middleware
/*   *   *   *   *   *   *   *   *   *   */

// app setings
app.set( 'view engine', 'ejs' );
app.use( cors() );

// session setings
app.use( session( config.session ));
app.use( parser() );

// express setings
app.use( express.urlencoded({ extended: true }));
app.use( express.static( 'public' ));
app.use( express.json() );

// facebook passport setings
app.use( passport.initialize() );
app.use( passport.session() );
app.use( facebook );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

app.use( '/', routerIndex );

app.use( '/auth', routerAuth );
app.use( '/expense', routerExpense );
app.use( '/list', routerList );
app.use( '/user', routerUser );


/*  Error handlers
/*   *   *   *   *   *   *   *   *   *   */

app.use( error.notFound );
app.use( error.catchAll );


/*  App export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = app;