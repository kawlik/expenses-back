const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // user secret individual auth string
    auth: { type: String, required: true },

    // user public data
    body: { type: Object, required: true },

    // user friends list
    friends: { type: Array, default: [] },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'user', schema );