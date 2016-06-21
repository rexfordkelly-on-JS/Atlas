module.exports = function(app){

	// Basic Route Demos
	app.get('/', function(req, res, next) {
	  res.json({
	    foo: "bar",
	    baz: "quux"
	  });
	});

	app.get('/test', function(req, res, next) {
	  res.send('Welcome to the API');
	});

	app.get("/err", function(req, res, next){
	  next(new Error("Some Error"));
	});
	
}