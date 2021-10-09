// router extract
const express = require( 'express' );
const router = express.Router();

// set up controller
const controller = require( '../controllers/user' );


/*  Routes
/*   *   *   *   *   *   *   *   *   *   */

/**
 * @swagger
 *  /user/id/:_id_user:
 *      get:
 *          summary: Find user by is.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: _id_user
 *              description: ID of the user.
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Returns selected user or null.
 */
router.get( '/id/:_id_user', controller.findOneById );

/**
 * @swagger
 *  /user/auth/:auth:
 *      get:
 *          summary: Find user by auth.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: auth
 *              description: Auth value of the user.
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Returns selected user or null.
 */
router.get( '/auth/:auth', controller.findOneByAuth );

/**
 * @swagger
 *  /user/name/:name:
 *      get:
 *          summary: Find user by name.
 *          parameters:
 *            - in: path
 *              required: true
 *              name: name
 *              description: Name of the user.
 *              schema:
 *                  type: string
 *          responses:
 *              200:
 *                  description: Returns all matched users or empty array.
 */
router.get( '/name/:name', controller.findManyByName );

/**
 * @swagger
 *  /user/add/:_id_user:
 *      put:
 *          summary: Add user as friend.
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
 *                  description: Adds selected friend to a user.
 */
router.put( '/add/:_id_user', controller.addUserAsFriend );

/**
 * @swagger
 *  /user/remove/:_id_user:
 *      remove:
 *          summary: Remove user as friend.
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
 *                  description: Removes selected user as friend.
 */
router.put( '/remove/:_id_user', controller.removeUserFromFriends );

/*  Router export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = router;