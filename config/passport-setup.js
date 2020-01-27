const passport = require('passport')
const OidcStrategy = require('passport-openidconnect').Strategy;
const keys = require('./keys');

// set up passport OpenID-connect strategy
passport.use('oidc', new OidcStrategy({
  issuer: `https://${keys.criipto.domain}`,
  authorizationURL: `https://${keys.criipto.domain}/oauth2/authorize`,
  tokenURL: `https://${keys.criipto.domain}/oauth2/token`,
  userInfoURL: `https://${keys.criipto.domain}/oauth2/userinfo`,
  clientID: keys.criipto.clientID,
  clientSecret: keys.criipto.clientSecret,
  callbackURL: 'http://localhost:5000/auth/criipto/redirect',
  scope: 'openid profile'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
  return done(null, profile);
}));

passport.use('nemid', new OidcStrategy({
  issuer: `https://${keys.criipto.domain}`,
  authorizationURL: `https://${keys.criipto.domain}/oauth2/authorize`,
  tokenURL: `https://${keys.criipto.domain}/oauth2/token`,
  userInfoURL: `https://${keys.criipto.domain}/oauth2/userinfo`,

  // login method (NemID)
  acr_values: 'urn:grn:authn:dk:nemid:poces',

  clientID: keys.criipto.clientID,
  clientSecret: keys.criipto.clientSecret,
  callbackURL: 'http://localhost:5000/auth/criipto/redirect',
  scope: 'openid profile'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
  return done(null, profile);
}));

passport.use('nor', new OidcStrategy({
  issuer: `https://${keys.criipto.domain}`,
  authorizationURL: `https://${keys.criipto.domain}/oauth2/authorize`,
  tokenURL: `https://${keys.criipto.domain}/oauth2/token`,
  userInfoURL: `https://${keys.criipto.domain}/oauth2/userinfo`,

  acr_values: 'urn:grn:authn:no:bankid',

  clientID: keys.criipto.clientID,
  clientSecret: keys.criipto.clientSecret,
  callbackURL: 'http://localhost:5000/auth/criipto/redirect',
  scope: 'openid profile'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
  return done(null, profile);
}));

passport.use('fin', new OidcStrategy({
  issuer: `https://${keys.criipto.domain}`,
  authorizationURL: `https://${keys.criipto.domain}/oauth2/authorize`,
  tokenURL: `https://${keys.criipto.domain}/oauth2/token`,
  userInfoURL: `https://${keys.criipto.domain}/oauth2/userinfo`,

  acr_values: 'urn:grn:authn:fi:all',

  clientID: keys.criipto.clientID,
  clientSecret: keys.criipto.clientSecret,
  callbackURL: 'http://localhost:5000/auth/criipto/redirect',
  scope: 'openid profile'
}, (issuer, sub, profile, accessToken, refreshToken, done) => {
  return done(null, profile);
}));
passport.serializeUser((user, done)=> {
  done(null, user);
});

passport.deserializeUser((user, done)=> {
  done(null, user);
});