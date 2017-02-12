function run(app) {
    
  
app.get("/", function(req,res){
	res.render("template", {page:"main", });
});

app.get("/about", function(req,res){
	res.render("template", {page:"about"});
});

app.get("/profile", function(req,res){

	console.log(userDb);
	res.render("template", {page:"profile", user:getUser(req.query.id)});
});

// 404
app.use(function(req, res){
	res.type("text/html"); // отправить mime-тип
	res.status(404); //отправить статус
	res.send("404 - Not found");// отправить строку
});

// 500
app.use(function(err, req, res, next){
	console.log(err);
	res.type("text/html");
	res.status(500);
	res.send("Internal server error!");
})
}
module.exports = run;