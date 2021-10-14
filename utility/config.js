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
    callbackURL: 'https://expenses-kawlik.herokuapp.com/auth/facebook/callback',

    // required data
    profileFields: [ 'id', 'displayName', 'picture' ],
};

/*  Swagger setings
/*   *   *   *   *   *   *   *   *   *   */

exports.swagger = {

    // basic info
    info: {

        title: 'Expenses API',

        description: 'Expenses API usage info',

        contact: {

            name: 'kawlik',
        },

        servers: [

            'http://localhost:8080', 'https://expenses-kawlik.herokuapp.com',
        ],
    },
};


/*  Session setings
/*   *   *   *   *   *   *   *   *   *   */

exports.session = {

    // session secret
    secret: "cat & dog",

    // session save option
    saveUninitialized: true,

    // session resave option
    resave: false,

    // session cookies 10 sec
    cookie: { maxAge: 1000 * 10 },
};

/*  Server setings
/*   *   *   *   *   *   *   *   *   *   */

exports.server = {

    // swagger docs
    swagger: '/swagger',

    // std server port value
    port: process.env.PORT || 8080,
};

/*  Config export
/*   *   *   *   *   *   *   *   *   *   */

module.exports = exports;