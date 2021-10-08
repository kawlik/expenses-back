const mongoose = require( 'mongoose' );


/*  Schema init
/*   *   *   *   *   *   *   *   *   *   */

const schema = new mongoose.Schema({

    // parrent list id
    list: { type: String, required: true },

    // expense creator user
    user: { type: String, required: true },

    // expense name
    name: { type: String, required: true },

    // expense value
    value: { type: Number, required: true, min: 1, max: 10000 },

    // expense argue status
    isArgued: { type: Boolean, required: true, default: false },
});


/*  Model export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = mongoose.model( 'expense', schema );