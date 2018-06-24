
exports.IsAuthenticated = function(req,res,next){
	//Passport creates a function to your session called isAuthenticated(), so you can use it to verify if the user really login in the app
	console.log(req.isAuthenticated());
	if(req.isAuthenticated()){
		//So, here you are saying that if the route called had any other function, it will goes to the next one ( which is rendering the HTML )
		next();
	}else{
		//Or else, goes back to login page
    	res.render('welcome/index',{message:'Ops! This route requires a login!'});
	}
};

exports.destroySession = function(req,res,next){
	req.session.destroy();
    res.redirect('welcome/index');
};