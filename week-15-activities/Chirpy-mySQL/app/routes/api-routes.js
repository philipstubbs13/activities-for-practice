// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", function(req, res) {
    connection.query("SELECT * FROM chirps;", function(err, data) {
      if (err) throw err;
      // Test it
      console.log('The solution is: ', data);
      // Test it
      // return res.send(data);
      res.json(data);
    });
  });


  // Add a chirp
  app.post("api/new", function(req, res){
    console.log("Chirp Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO chirps"
  })


};
