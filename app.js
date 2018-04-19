var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	passport = require('passport'),
	session = require('express-session'),
	flash = require('connect-flash'),
	methodOverride = require('method-override'),
	partials = require('express-partials');

	// app.use(app.router);
	// routes.initialize(app);

// Adding dependencies
// require('./config/config')
// const nodemailer = require('./config/nodemailer')
// const mongoose = require('./config/mongoose')

//passport
// require('./config/passport')(passport);

//static folder
app.use(express.static(__dirname + "/public"));
// app.use(express.static(path.join(__dirname,'../public')));

// View engine
app.set("view engine", "ejs")

//middlewares
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json())	//-----------------------
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true,
}));
app.use(flash());
app.use(partials());
// app.use(passport.initialize());
// app.use(passport.session());

//Global variables
app.use((req,res,next)=> {
	res.locals.successMessage = req.flash('successMessage');
	res.locals.error_msg = req.flash('errorMessage');
  	res.locals.error = req.flash('error');
  	res.locals.user = req.user || null;
  	next();
});

// Refferencing routes
var bookStoreRoutes = require('./routes/bookStore');
var adminRoutes = require('./routes/admin');
var userRoutes = require('./routes/user');

app.get('/',function(req,res){
	res.redirect('/stores');
})
app.get('/contact',function(req,res){
	res.render("contact.ejs")
})

app.use('/stores',bookStoreRoutes);
app.use('/users',userRoutes);
app.use('/admin',adminRoutes);

app.listen(3000,function(port,err){
  if(err)
  	console.log('Error starting server :p');
  else
  	console.log('Server sunning at: '+port);
})
