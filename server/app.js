// Here, we will sync our database, create our application, and export this module so that we can use it in the bin directory, where we will be able to establish a server to listen and handle requests and responses;

// Require environmental variables if we are in development or testing;
// if (process.env.NODE_ENV !== 'production') {
//   require('./secrets');
// }

// Module dependencies;
const express = require('express');
const session = require("express-session");
const passport = require("passport");
const authRouter = require("./auth");
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');

// Our database instance;
const db = require('./database');

//auth
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sessionStore = new SequelizeStore({ db });

// Utilities;
const createLocalDatabase = require('./utilities/createLocalDatabase');
const seedDatabase = require('./utilities/seedDatabase');


// Our apiRouter;
const apiRouter = require('./routes/index');

// A helper function to sync our database;
const syncDatabase = () => {
  if (process.env.NODE_ENV === 'production') {
    db.sync().then(() => seedDatabase());
  }
  else {
    console.log('As a reminder, the forced synchronization option is on');
    db.sync({force:true})
      .then(() => seedDatabase())
      .catch(err => {
        if (err.name === 'SequelizeConnectionError') {
          createLocalDatabase();
          seedDatabase();
        }
        else {
          console.log(err);
        }
      });
    }
};

// Instantiate our express application;
const app = express();

//auth
passport.serializeUser((user,done) => done(null, user.id));
passport.deserializeUser(async(id,done) => {
  try {
    console.log(id);
    const user = await db.models.user.findByPk(id);
    done(null,user);
  }
  catch(err) {
    done(err);
  }
});

// A helper function to create our app with configurations and middleware;
const configureApp = () => {
  app.use(helmet());
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.use(cookieParser());
  app.use(cors());

  //auth
  app.use(
    session({
      secret: "super secret key to encrypt and sign the cookie",
      store: sessionStore,
      resave: false,
      saveUninitialized: false
    })
  );
  app.use((express.static("../client/build")));
  app.use(passport.initialize());
  app.use(passport.session());

  //mount authRouter
  app.use("/auth", authRouter);

  // Mount our apiRouter;
  app.use('/api', apiRouter);

  app.get('*', (req, res, next) => {
    console.log(path.resolve(__dirname, "../client", "build/index.html"));
    res.sendFile(path.resolve(__dirname, "../client", "build/index.html"))
  });

  // Error handling;
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    }
    else {
      next();
    }
  });

  // More error handling;
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

// Main function declaration;
const bootApp = async () => {
  await sessionStore.sync();
  await syncDatabase();
  await configureApp();
};

// Main function invocation;
bootApp();

// Export our app, so that it can be imported in the www file;
module.exports = app;
