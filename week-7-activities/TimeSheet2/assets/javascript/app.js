//Initialize firebase
// Initialize Firebase
var config = {
apiKey: "AIzaSyCFkttrzyxlAyKYiEbQmSqd47kgi_FdaR4",
authDomain: "employee-data-management-28909.firebaseapp.com",
databaseURL: "https://employee-data-management-28909.firebaseio.com",
projectId: "employee-data-management-28909",
storageBucket: "",
messagingSenderId: "273712763466"
};
firebase.initializeApp(config);

//Create a variable to reference the database
var database = firebase.database();


//Submit button on click event
 $("#submit-button").on("click", function() {

 	event.preventDefault();

 	//Grab the user input from the text boxes.
	var employeeName = $("#employee-name").val().trim();
	var employeeRole = $("#employee-role").val().trim();
	var startDate = $("#start-date").val().trim();
	var monthlyRate = $("#monthly-rate").val().trim();

	console.log(employeeName);
	console.log(employeeRole);
	console.log(startDate);
	console.log(monthlyRate);

	database.ref().push({
		employeeName: employeeName,
		employeeRole: employeeRole,
		startDate: startDate,
		monthlyRate: monthlyRate,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

	//Clear text boxes after user clicks submit...
	$("#employee-name").val("");
	$("#employee-role").val("");
	$("#start-date").val("");
	$("#monthly-rate").val("");

});

//Firebase watcher 
database.ref().on("child_added", function(childSnapShot){
	console.log(childSnapShot.val());
	var employeeName = childSnapShot.val().employeeName;
	var employeeRole = childSnapShot.val().employeeRole;
	var startDate = childSnapShot.val().startDate;
	var monthlyRate = childSnapShot.val().monthlyRate;

	console.log(employeeName);
	console.log(employeeRole);
	console.log(startDate);
	console.log(monthlyRate);

	var currentTime = moment();
    console.log(currentTime);
    var newDateFormat = moment(currentTime).format("MM/DD/YY"); 
    console.log(newDateFormat);
    var monthsWorked = moment(newDateFormat).diff(moment(startDate), "months");
    console.log(monthsWorked);

	//Add employee data to the HTML.
	var tRow = $("<tr>");
	var employeeNameTd = $("<td>").text(employeeName);
    var employeeRoleTd = $("<td>").text(employeeRole);
    var startDateTd = $("<td>").text(startDate);
    var monthlyRateTd = $("<td>").text(monthlyRate);
    var monthsWorkedTd = $("<td>").text(monthsWorked);
    tRow.append(employeeNameTd, employeeRoleTd, startDateTd, monthsWorked, monthlyRateTd, "placeholder");
    $("#employee-body").append(tRow);
    // $("#employee-body").append("<div><span id='name'>" + employeeName + ' <span id="role">' + employeeRole + " <span id='start'>" + startDate + ' " )


})

