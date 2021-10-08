// controller prepare
const Controller = require( '../utility/controller' );
const model = require( '../models/user' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// finds one user based by id
controller.findOneById = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { _id_user } = req.params;

        // finding user
        const user = await controller.model.findOne({ _id: _id_user }, { body: 1 });

        if( user ) {

            // sending back result
            return res.status( 200 ).json({ success: true, response: user });

        } else {

            // sending back result
            return next( new Error( 'User has not been found!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

// finds one user based by auth
controller.findOneByAuth = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { auth } = req.params;

        // finding user
        const user = await controller.model.findOne({ auth: auth });

        if( user ) {

            // sending back result
            return res.status( 200 ).json({ success: true, response: user });

        } else {

            // sending back result
            return next( new Error( 'User has not been found!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

// finds all users based by name
controller.findManyByName = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { name } = req.params;

        // name length check
        if( name.length >= 3 ) {

            // finding user
            const users = await controller.model.find({ 'body.name': { $regex: name, $options: 'i' }}, { body: 1 });

            // sending back result
            return res.status( 200 ).json({ success: true, response: users });

        } else {

            // sending back result
            return next( new Error( 'User name is too short! At least 3 letters are required!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

// adds selected friend to a user
controller.addUserAsFriend = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { auth } = req.body;
        const { _id_user } = req.params;

        // finding users
        const userA = await controller.model.findOne({ auth: auth });
        const userB = await controller.model.findOne({ _id: _id_user });

        // checks users status
        if( userA && userB ) {

            // parsing users id
            const idA = userA._id.toString();
            const idB = userB._id.toString();

            // adds friends and redundancy prevent
            if( !userA.friends.includes( idB )) { userA.friends.push( idB ); }
            if( !userB.friends.includes( idA )) { userB.friends.push( idA ); }

            // saves changes
            await userA.save();
            await userB.save();

            // sending back result
            return res.status( 200 ).json({ success: true, response: userA });

        } else {
            
            // sending back result
            return next( new Error( 'User has not been found!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

// delets user selected friend
controller.deleteUserFromFriends = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { auth } = req.body;
        const { _id_user } = req.params;

        // finding users
        const userA = await controller.model.findOne({ auth: auth });
        const userB = await controller.model.findOne({ _id: _id_user });

        // checks users status
        if( userA && userB ) {

            // parsing users id
            const idA = userA._id.toString();
            const idB = userB._id.toString();

            // adds friends and redundancy prevent
            userA.friends = userA.friends.filter( user => user !== idB );
            userB.friends = userB.friends.filter( user => user !== idA );

            // saves changes
            await userA.save();
            await userB.save();

            // sending back result
            return res.status( 200 ).json({ success: true, response: userA });

        } else {
            
            // sending back result
            return next( new Error( 'User has not been found!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;