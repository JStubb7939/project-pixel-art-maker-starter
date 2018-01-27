const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

// Configure Passport to use Auth0
const strategy = new Auth0Strategy(
  {
    domain: 'jstubblefield7939.auth0.com',
    clientID: 'R1wiluUa9k91xIQVemBURfgvtC9ki0Dp',
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'https://custom-pixel-art-maker.herokuapp.com/'
  },
  (accessToken, refreshToken, extraParams, profile, done) => {
    return done(null, profile);
  }
);

passport.use(strategy);

// This can be used to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

// ...
app.use(passport.initialize());
app.use(passport.session());

