// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/list' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// returns all list assigned to user
router.get( '/all/:_id_user', controller.findAllByID );

// adds an empty list based on user id
router.post( '/add/:_id_user', controller.createList );

// locks or unlocks list based on user auth
router.put( '/lock/:_id_list', controller.lockList );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;