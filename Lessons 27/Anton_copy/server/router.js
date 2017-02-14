function run(app){
	app.get("/", function(req, res){
		res.render('template', {page:"main"} );
	})

	app.get("/about", function(req, res){
		res.render('template', {page:"about"} );
	})

	app.get("/profile", function(req, res){
		res.render('template', {page:"profile", user : getUser(req.query.id) } );
	})

	//404
	app.use(function(req, res){
		res.status(404);
		res.render('template', {page:"404"} );
	})

	//500
	app.use(function(err, req, res, next){
		res.status(500);
		res.render('template', {page:"500"} );
	})
}

module.exports = run;