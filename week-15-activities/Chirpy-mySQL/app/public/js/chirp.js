// *********************************************************************************
// TO DO:
// 1. Display all chirps on page load
// 2. Add new chirp to database and prepend to existing chirps
// *********************************************************************************

// When the page loads, grab and display all of our chirps
$.get( "/api/all", function( data ) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
    
        var chirpdiv = $("<div>");
        chirpdiv.addClass("chirp");
        chirpdiv.append("<p>Author: " + data[i].author + "</p>").append("<p>Chirp: " + data[i].chirp + "</p>");
        chirpdiv.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");
        $(".chirps").append(chirpdiv);
    }


    alert( "Load was performed." );
  });


// When user chirps
