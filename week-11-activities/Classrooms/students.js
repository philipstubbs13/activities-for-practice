var Class = require("./class.js");

function Student (name, subject, gpa) {
	this.name = name;
	this.subject = subject;
	this.gpa = gpa;
	this.printStudentInfo = function() {
		var studentInfo = 

		"Name: " + this.name + "\r\n" +
		"Subject: " + this.subject + "\r\n" +
		"GPA: " + this.gpa + "\r\n" 

		console.log(studentInfo);
	}
}

var student1 = Student("Phil", "css", 4.0);

Class.addStudent("Sarah", "Javascript", 2.0);
console.log(Class.students);

printStudentInfo();
