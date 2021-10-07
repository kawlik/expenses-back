/*  Database setings
/*   *   *   *   *   *   *   *   *   *   */

exports.db = {

    // db connection link
    link: 'mongodb+srv://admin:sxn3QNQFDFyGMwx5@cluster0.rzz93.mongodb.net/expenses?retryWrites=true&w=majority',

    // db connection options
    options: {

        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    },
};


/*  Facebook passport setings
/*   *   *   *   *   *   *   *   *   *   */

exports.passport = {

    // passport cielnt ID
    clientID: '959806254572486',

    // passport client secret key
    clientSecret: '63282e12e12dffd580846ec8b5c8a7d5',

    // passport success return path
    callbackURL: 'http://localhost:8080/auth/facebook/callback',

    // required data
    profileFields: [ 'id', 'displayName', 'picture' ],
};


/*  Server setings
/*   *   *   *   *   *   *   *   *   *   */

exports.server = {

    // std server port value
    port: process.env.PORT || 8080,
};

/*  Config export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = exports;