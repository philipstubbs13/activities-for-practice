var Bands = require ("./bands2.js");

if (process.argv[2] === "punk") {
	console.log("A punk band is " + Bands.bandsList.punk);
}

else if (process.argv[2] === "rap") {
	console.log("A rap band is " + Bands.bandsList.rap);
}

else if (process.argv[2] === "classic") {
	console.log("A classic band is " + Bands.bandsList.classic);
}

else {
	console.log("A punk band is " + Bands.bandsList.punk);
	console.log("A rap band is " + Bands.bandsList.rap);
	console.log("A classic band is " + Bands.bandsList.classic);

}
