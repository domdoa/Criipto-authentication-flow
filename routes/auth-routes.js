const router = require('express').Router()
const passport = require('passport');

// authenticate with Criipto
router.get('/criipto', passport.authenticate('oidc'))

// authentication callback
router.get('/criipto/redirect',passport.authenticate('oidc'),(req,res)=>{
  // return logged in user
  res.send(req.user)
})

module.exports = router