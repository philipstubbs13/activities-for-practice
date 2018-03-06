var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "movie_planner_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }

  console.log("connected as id " + connection.threadId);
});

// Root get route
app.get("/", function(req, res) {
  connection.query("SELECT * FROM movies;", function(err, data) {
    if (err) throw err;

    // Test it
    console.log('The solution is: ', data);

    // Test it
    // return res.send(data);

    res.render("index", { movies: data });
  });
});

app.post("/", function(req, res) {
  // Test it
  console.log('You sent, ' + req.body.movie);

  // Test it
  //return res.send('You sent, ' + req.body.wish);

  // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
  // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
  // https://en.wikipedia.org/wiki/SQL_injection
  connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
    if (err) throw err;

    res.redirect("/");
  });
});


app.listen(port);
