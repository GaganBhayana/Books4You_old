var express = require("express");
var router  = express.Router();
// var middleware = require("../middleware");


router.get('/',function(req,res){
  // res.send('Welcome gagan');
  res.render("index.ejs")
  // res.render('products.ejs')
})

router.get('/show',function(req,res){
	res.render('products.ejs');
})
router.get('/_id',function(req,res){
	res.render('single.ejs');
})

module.exports = router;

