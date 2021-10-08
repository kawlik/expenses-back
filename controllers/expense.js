// controller prepare
const Controller = require( '../utility/controller' );
const model = require( '../models/expense' );

// additional models
const modelUser = require( '../models/user' );
const modelList = require( '../models/list' );

// controller init
const controller = new Controller( model );


/*  Custom actions
/*   *   *   *   *   *   *   *   *   *   */

// creates an expense and adds to selected list
controller.findAllOnList = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { _id_list } = req.params;

        // request valid creating new expense
        const expenses = await controller.model.find({ list: _id_list });
            
        // sending back result
        return res.status( 200 ).json({ success: true, response: expenses });

    } catch( err ) {

        // error event
        return next( err );
    }
};

// creates an expense and adds to selected list
controller.addToList = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { auth, data } = req.body;
        const { _id_list } = req.params;

        // finding user and list
        const user = await modelUser.findOne({ auth: auth });
        const list = await modelList.findOne({ _id: _id_list });

        if( user && list && !list.status.locked ) {

            // request valid creating new expense
            const expense = await new controller.model({ list: _id_list, user: data.user, name: data.name, value: data.value });
            
            // saves an expense
            await expense.save();

            // sending back result
            return res.status( 200 ).json({ success: true, response: expense });

        } else {

            // sending back result
            return next( new Error( 'Expense could not be added!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

controller.argueAnExpense = async ( req, res, next ) => {

    try {
        
        // parsing params
        const { _id_expense } = req.params;

        // finding expense
        const expense = await controller.model.findOne({ _id: _id_expense });

        if( expense ) {

            // seting the argue
            expense.isArgued = true;

            // saving updated expense
            await expense.save();

            // sending back result
            return res.status( 200 ).json({ success: true, response: expense });

        } else {

            // sending back result
            return next( new Error( 'Expense could not be argued!' ));
        }

    } catch( err ) {

        // error event
        return next( err );
    }
};

/*  Controller export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = controller;