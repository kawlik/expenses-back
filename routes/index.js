// router extract
const express = require( 'express' );
const router = express.Router();

// additional modules
const config = require( '../utility/config' );

// set up controller
const controller = require( '../controllers/index' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// render app
router.get( '/', controller.renderAppPage );

// home page render
router.get( '/docs', controller.renderDocsPage );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;