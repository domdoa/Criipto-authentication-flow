const router = require('express').Router()
const passport = require('passport');

// login
router.get('/login',(req,res)=>{
  res.send('login')
})

// logout
router.get('/logout',(req,res)=>{
  req.logout();
  res.redirect('/')
})

// authenticate with Criipto
router.get('/criipto/nemid', passport.authenticate('nemid'))

// authenticate with Criipto
router.get('/criipto/nor', passport.authenticate('nor'))

// authenticate with Criipto
router.get('/criipto/fin', passport.authenticate('fin'))


// authentication callback
router.get('/criipto/redirect',passport.authenticate('oidc'),(req,res)=>{
  res.redirect('http://localhost:3000/');
})

router.get("/user", (req, res) => {
  res.send(req.user)
});

module.exports = router