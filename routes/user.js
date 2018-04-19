var express = require("express");
var router  = express.Router();
// var middleware = require("../middleware");


router.get('/',function(req,res){
  res.render('signin.ejs');
})
router.get('/cart',function(req,res){
  res.render('cart.ejs');
})
router.get('/dashboard',function(req,res){
  res.render('tim/dashboard.ejs');
})

module.exports = router;