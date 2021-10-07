// router extract
const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/auth' );
const passport = require( 'passport' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// facebook auth init
router.get( '/facebook', controller.auth );

// facebook auth callback & success
router.get( '/facebook/callback', controller.callback, controller.success );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;