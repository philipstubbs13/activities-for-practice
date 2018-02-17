var mysql = require('mysql');

var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: 'root',
	password: '',
	database: 'top_songsdb'
});

function querySongsByArtist() {
	connection.query("SELECT position, artist, song, year FROM top5000 WHERE ?", 
		{
		artist: "Britney Spears",
		},

		function(err, res){
		if(err) throw err;

		console.log(res);
		console.log("Britney Spears songs");
		for (var i = 0; i < res.length; i++){
			console.log("====================================");
			var songs = 

			"Position #" + res[i].position + "\r\n" +
			"Song name: " + res[i].song + "\r\n" +
			"Year: " + res[i].year + "\r\n" 

			console.log(songs);
			console.log("=====================================");

		}
	})
}

//querySongsByArtist();

//A query which returns all data contained within a specific range.
function queryRange() {
	var query = "SELECT artist, position FROM top5000 WHERE position BETWEEN ? AND ?";
	connection.query(query, [1, 40],

	function(err, res){
		if(err) throw err;

		//console.log(res);
		for (var i =0; i < res.length; i++){
			var range = 
			"Position: " + res[i].position + "\r\n" +
			"Artist: " + res[i].artist + "\r\n" 
		console.log(range);
		}

	})
}

queryRange();

//a query which returns all artists who appear within the top 5000 more than once.
function querymultipleArtists() {
	connection.query("SELECT artist FROM top5000 GROUP BY artist HAVING COUNT(artist) > 1",

	function (err, res) {
		if(err) throw err;
		console.log(res.length);
	
	})
}

//querymultipleArtists();

//A query wich searchs for a specific song in the top 5000 and returns the data for it.
function searchSong() {
	connection.query("SELECT song from top5000 WHERE ?",
		{
		song: "Hey Jude",
		},

		function(err, res){
		if(err) throw err;

		console.log(res);
		// console.log("Britney Spears songs");
		// for (var i = 0; i < res.length; i++){
		// 	console.log("====================================");
		// 	var songs = 

		// 	"Position #" + res[i].position + "\r\n" +
		// 	"Song name: " + res[i].song + "\r\n" +
		// 	"Year: " + res[i].year + "\r\n" 

		// 	console.log(songs);
		// 	console.log("=====================================");

		// }
		connection.end();
		})
}

//searchSong();
