<!-- Startup mongod and the mongo shell and switch to a new db named zoo.

Insert into a collection named animals:
One entry for each of your five favorite animals.

Each entry should have
1. A field of numLegs with an integer of the number of legs that animal has.
2. A field of class with that animal's class (mammal, reptile, etc).
3. A field of weight with an integer of the weight of the animal in pounds (any reasonable weight, really).
4. A field of name, with the animal's name.
5. A field of whatIWouldReallyCallIt with the name of what you would call the animal if you got to name it.

Example:

{
  "name": "Panda",
  "numLegs": 4,
  "class": "mammal",
  "weight": 254,
  "whatIWouldReallyCallIt": "Desiigner"
} -->


db.animals.insertMany([{"animal": "dog", "numLegs": 4, "class":"mammal", "weight": 20, "whatIWouldReallyCallIt": "Prince"},
{"animal": "elephant", "numLegs": 4, "class":"mammal", "weight": 12000, "whatIWouldReallyCallIt": "Stampy"},
{"animal": "Sloth", "numLegs": 4, "class":"mammal", "weight": 22, "whatIWouldReallyCallIt": "Pokey"},
{"animal": "Cheetah", "numLegs": 4, "class":"mammal", "weight": 122, "whatIWouldReallyCallIt": "Chester"},
{"animal": "Lizard", "numLegs": 4, "class":"reptile", "weight": 5, "whatIWouldReallyCallIt": "Charles"}])


db.animals.find().sort({weight:1})

db.animals.find().sort({weight:-1})