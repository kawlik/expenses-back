// router extract
const express = require( 'express' );
const router = express.Router();

// additional modules
const config = require( '../utility/config' );

// set up controller
const controller = require( '../controllers/index' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// home page render
router.get( '/', controller.renderHomePage );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;