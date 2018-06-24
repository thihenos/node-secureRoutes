'use strict';

module.exports = function (app,passport) {

  //Here, I isolate one Route in the file route/application
  let application = require('./routes/application');

  /* Secured Route
   * First, the app will enter in routes/application, so there you can create any validation you want, and use the NEXT function for Node enter in the function that will
   * render the page secured
   * Following the logic, you can create a lot of routes before it goes to the final rendering HTML
   * Example: app.get('/home', route1, route2, route3, routefinal);
   */
  app.get('/home',application.IsAuthenticated,function(req,res){
    res.render('welcome/home');
  });
  /* No Secured Route
   * as you can see, we ar just calling the render page, whitout validanting the requisition
   */
  app.get('/homeNoSecure',function(req,res){
    res.render('welcome/homeNoSecure');
  });

	//Route responsable to use Passport to verify the user and password
	app.post('/auth/login',function(req,res,next){
	  //Pointing to passport that the app will use local strategy, which means that user and password will be save in some database
    passport.authenticate('local-login'
        //{successRedirect: '/home',failureRedirect:'/'}
    ,function(err,user){
        if(!user){
          res.send('User or password wrong');
        }else{
          req.logIn(user,function(error){
            if(error){
              return next(error);
            }else{
              return res.redirect('/home');
            }
          });
        }
    })(req,res,next);
  });

  //If the user tries to access any address of the app which not exists in routes.js file, it will be send to the welcome page
  app.route('/*').get(function (req, res) {
    res.render('welcome/index');
  });


};