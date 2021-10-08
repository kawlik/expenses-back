const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // list participants
    userA: { type: String, required: true },
    userB: { type: String, required: true },

    // list status
    status: {

        // users propeties
        lockUserA: { type: Boolean, required: true, default: false },
        lockUserB: { type: Boolean, required: true, default: false },
        locked: { type: Boolean, required: true, default: false },

        // whole list status
        finished: { type: Boolean, required: true, default: false },
    },

    // list date
    date: { type: Date, required: true, default: Date.now() },

    // expenses list
    expenses: { type: Array, required: true, default: [] },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'list', schema );