function Programmer (name, position, age, language) {
	this.name = name;
	this.position = position;
	this.age = age;
	this.language = language;
	this.printInfo = function() {
		var programmerInfo = 

		"Name: " + this.name + "\r\n" + 
		"Position: " + this.position + "\r\n" +
		"Age: " + this.age + "\r\n" +
		"Language: " + this.language + "\r\n"

		console.log(programmerInfo);
	}
}

var programmer1 = new Programmer ("Phil", "Developer", 26, "css");
programmer1.printInfo();