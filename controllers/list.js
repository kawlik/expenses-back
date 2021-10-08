// controller prepare
const Controller = require( '../utility/controller' );
const model = require( '../models/list' );

// additional models
const modelUser = require( '../models/user' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// returns all list assigned to user
controller.findAllByID = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { _id_user } = req.params;

        // finding user and list
        const lists = await controller.model.find({ $or: [{ userA: _id_user }, { userB: _id_user }] });

        // sending back result
        return res.status( 200 ).json({ success: true, response: lists });

    } catch( err ) {

        // error event
        return next( err );
    }
};

// creates an expense and adds to selected list
controller.createList = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { auth } = req.body;
        const { _id_user } = req.params;

        // finding user and list
        const userA = await modelUser.findOne({ auth: auth });
        const userB = await modelUser.findOne({ _id: _id_user });

        if( userA && userB ) {

            // creates new list
            const list = await new controller.model({ userA: userA._id, userB: userB._id });

            // saves list
            await list.save();

            // sending back result
            return res.status( 200 ).json({ success: true, response: list });

        } else {

            // sending back result
            return next( new Error( 'List could not be added!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

// locks or unlocks list based on user auth
controller.lockList = async ( req, res, next ) => {

    try {

        // parsing params
        const { auth, lock } = req.body;
        const { _id_list } = req.params;

        // fetching list
        const list = await controller.model.findOne({ _id: _id_list });

        // checking users auth
        const userByAuth = await modelUser.findOne({ auth: auth });
        const userID = userByAuth?._id.toString()

        if(( list.userA === userID || list.userB === userID ) && !list.status.finished ) {

            if( lock === true || lock === 'true' ) {    // handling lock request

                // locks list
                list.status.locked = true;

                // sets lock on pacticular user
                if( userID === list.userA ) { list.status.lockUserA = true; }
                if( userID === list.userB ) { list.status.lockUserB = true; }

                // checks if list is finished
                if( list.status.lockUserA && list.status.lockUserB ) {

                    list.status.finished = true;
                }

            } else {        // handling unlock request

                // unlocks entires list
                list.status.lockUserA = false;
                list.status.lockUserB = false;
                list.status.locked = false;
            }

            // saves list
            await list.save();

            // sending back result
            return res.status( 200 ).json({ success: true, response: list });

        } else {

            // sending back result
            return next( new Error( 'List could not be locked!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};


/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;