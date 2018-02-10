var bands = require ('./bands3.js');

var input = process.argv;

var bandType = input[2];

if (bandType === "punk") {
	console.log("A punk band is " + bands.bandslist.punk);
}

else if (bandType === "rap") {
	console.log("A rap band is " + bands.bandslist.rap);
}

else if (bandType === "classic") {
	console.log("A classic band is " + bands.bandslist.classic);
}

else {
	console.log("A punk band is " + bands.bandslist.punk);
	console.log("A rap band is " + bands.bandslist.rap);
	console.log("A classic band is " + bands.bandslist.classic);
}