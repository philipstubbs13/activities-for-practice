var Student = require("./students.js");

function Class (number, professor, room) {
	this.number = number;
	this.professor = professor;
	this.room = room;
	this.students = [];
	this.addStudent = function(name, subject, gpa) {
		this.students.push(new Student(name, subject, gpa));

	};
};

module.exports = Class;