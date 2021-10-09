// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/list' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

/**
 * @swagger
 *  /list/argue/:_id_user:
 *      get:
 *          summary: Find all lists assigned to user.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: _id_user
 *              description: ID of the user.
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Returns all lists assigned to selected user.
 */
router.get( '/all/:_id_user', controller.findAllByID );


/**
 * @swagger
 *  /list/add/:_id_user:
 *      post:
 *          summary: Add an empty list.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: _id_user
 *              description: ID of the user.
 *              schema:
 *                  type: string
 *            - in: body
 *              required: true
 *              schema:
 *                  type: object
 *                  properties:
 *                      auth:
 *                          type: string
 *                          description: User auth string
 *                          example: '106469918478262'
 *          responses:
 *              200:
 *                  description: Adds an empty list with selected user.
 */
router.post( '/add/:_id_user', controller.createList );


/**
 * @swagger
 *  /list/lock/:_id_list:
 *      put:
 *          summary: Lock/unlock list.
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
 *                          description: User auth string
 *                          example: '106469918478262'
 *                      lock:
 *                          type: boolean
 *                          description: Lock state
 *                          example: true
 *          responses:
 *              200:
 *                  description: Locks or unlocks selected list list.
 */
router.put( '/lock/:_id_list', controller.lockList );


/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;