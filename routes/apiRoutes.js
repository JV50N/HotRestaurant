const tableData = require("../data/tables");
const waitListData = require("../data/waitlist");

module.exports = function(app){

	app.get('/api/tables', function(req,res){
		res.json(tableData);
	});

	app.get('/api/waitlist', function(req,res){
		res.json(waitListData);
	});

	app.post('/api/tables', function(req,res){
		if (tableData.length < 5){
			tableData.push(req.body);
			res.json(true);
		} else {
			waitListData.push(req.body);
			res.json(false);
		}
	});


  app.post("/api/clear", function() {
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });

}