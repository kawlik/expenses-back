// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/expense' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

/**
 * @swagger
 *  /expense/list/:_id_list:
 *      get:
 *          summary: Find all expenses on list.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: _id_list
 *              description: ID of the list.
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Finds all expenses on selected list. 
 */
router.get( '/list/:_id_list', controller.findAllOnList );


/**
 * @swagger
 *  /expense/add/:_id_list:
 *      post:
 * 
 *          summary: Create an expense.
 * 
 *          parameters:
 *            - in: path
 *              required: true
 *              name: _id_list
 *              description: ID of the list.
 *              schema:
 *                  type: string
 *            - in: body
 *              required: true
 *              schema:
 *                  type: object
 *                  properties:
 *                      auth:
 *                          type: string
 *                          description: User auth string.
 *                          example: '106469918478262'
 *                      data:
 *                          type: object
 *                          properties:
 *                              _id_list:
 *                                  type: string
 *                                  description: List id string
 *                                  example: '61606d977c75f1f68635e761'
 *                              user:
 *                                  type: string
 *                                  description: Expense owner user id string
 *                                  example: '615eee8fad8c12849fa59870'
 *                              name:
 *                                  type: string
 *                                  description: Expensa name
 *                                  example: 'Sample expense'
 *                              value:
 *                                  type: number
 *                                  description: Expensa value
 *                                  example: 10
 * 
 *          responses:
 *              200:
 *                  description: Creates an expense and adds to selected list.
 */
router.post( '/add/:_id_list', controller.addToList );


/**
 * @swagger
 *  /expense/argue/:_id_expense:
 *      put:
 *          summary: Argue an expense.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: _id_expense
 *              description: ID of the expense.
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Argues an expense on selected list.
 */
router.put( '/argue/:_id_expense', controller.argueAnExpense );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;