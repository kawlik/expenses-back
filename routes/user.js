// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/user' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// finds one user based by auth
router.get( '/id/:id', controller.findOneById );

// finds one user based by auth
router.get( '/auth/:auth', controller.findOneByAuth );

// finds all users based by name
router.get( '/name/:name', controller.findManyByName );

// adds selected friend to a user
router.put( '/add/:user', controller.addUserAsFriend );

// delets user selected friend
router.delete( '/delete/:user', controller.deleteUserFromFriends );

/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;