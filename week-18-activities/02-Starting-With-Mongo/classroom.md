## Instructions

A. Use the command line to create a classroom database. Insert entries for yourself and the people in your row in a students collection. Each document should have:

use classroom_db
db

db.classroom.insert({"student": "Phil", "rownumber": 1, "os":"Win", "hobbies": ["coding", "running", "basketball"]})
db.classroom.insert({"student": "Kyle", "rownumber": 2, "os":"Win", "hobbies": ["coding", "cooking", "soccer"]})
db.classroom.insert({"student": "Abby ", "rownumber": 3, "os":"Mac", "hobbies": ["hiking", "eating", "skiing"]})
db.classroom.insert({"student": "Justin", "rownumber": 4, "os":"Mac", "hobbies": ["walking the dog", "shopping", "playing guitar"]})
db.classroom.insert({"student": "Micheal", "rownumber": 1, "os":"Win", "hobbies": ["watching tv", "baseball", "piano"]})
db.classroom.insert({"student": "Jacob", "rownumber": 2, "os":"Mac", "hobbies": ["coding", "skiing", "hiking"]})
db.classroom.insert({"student": "Josh", "rownumber": 1, "os":"Mac", "hobbies": ["coding", "skiing", "hiking"]})


1. A field of name with the person's name.
2. A field of rownumber which will contain the row number that they are in.
3. A field of os which will contain the Operating System of the computer they are using: 'Mac', 'Win', etc
4. A field of hobbies with an array of the hobbies the person likes to do.

B. Use find commands to get:
db.classroom.find()
db.classroom.find().length()

1. A list of everyone in your row.
db.classroom.find({"rownumber": 1})
2. An entry for a single person.
db.classroom.find({_id: ObjectId("5ab6811fe49fafcb9ff752b6")})
db.classroom.find({"name": "Abby"})
3. The entries for all the Mac users in your row.
db.classroom.find({"rownumber": 1, os: "Mac"})

### BONUS

If you finish early, check out the MongoDB documentation and figure out how to find users by an entry in an array.
db.classroom.find({"hobbies": {$in: ["running", "coding"]}})
db.classroom.find({"hobbies": {$all: ["running", "coding"]}})