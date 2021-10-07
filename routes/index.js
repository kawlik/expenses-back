// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/index' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// home page render
router.get( '/', controller.renderHomePage );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;