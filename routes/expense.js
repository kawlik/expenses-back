// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/expense' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

// creates an expense and adds to selected list
router.get( '/list/:_id_list', controller.findAllOnList );

// creates an expense and adds to selected list
router.post( '/add/:_id_list', controller.addToList );

// creates an expense and adds to selected list
router.put( '/argue/:_id_expense', controller.argueAnExpense );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;