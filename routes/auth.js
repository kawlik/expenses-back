// router extract
const express = require( 'express' );
const router = express.Router();

// proper controller
const controller = require( '../controllers/auth' );
const passport = require( 'passport' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

/**
 * 
 *  /auth/facebook:
 *      get:
 *          summary: Login process initialization.
 */
router.get( '/facebook', controller.auth );


/**
 * 
 *  /auth/facebook/callback:
 *      get:
 *          summary: Completion of the login process.
 *          responses:
 *              200:
 *                  description: Renders the login token page. 
 */
router.get( '/facebook/callback', controller.callback, controller.success );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;