# Student Update Delete And Drop

## Instructions

Go back to your classroom database.

use classroom_db
db

You've decided to take on a new hobby. Add Extreme Basket Weaving to your array of hobbies.

db.classroom.update({"student": "Phil"}, {$push: {"hobbies":"Extreme Basket Weaving"}})

While practicing for your Extreme Basket Weaving Competition, you broke the computer of the person next to you. They're using a new Operating System now. Change their os field.
db.classroom.update({"student": "Abby"}, {$set: {"os":"Win"}})

Another student in your row saw you break that computer and wisely decided to move. Remove them from your database.
db.classroom.remove({"student":"Abby"})

You are worried everyone else will leave and you'll have to sit all alone. You decide to bribe everyone who didn't leave with candy. Add a field of gavecandy with a value of false to everyone in the array so you can keep track.
db.classroom.update({},{$set : {"gavecandy":false}}, {multi:true})

All this work made you hungry, so you bought yourself some candy. Change the value of gavecandy to true in your entry.
db.classroom.update({"student": "Phil"},{$set : {"gavecandy":true}})