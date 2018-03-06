var orm = require("./config/orm.js");

// Find all the pets ordering by the lowest price to the highest price.
// orm.selectNames("party_name", "parties");

// orm.selectNames("client_name", "clients");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("parties", "party_type", "grown-up");

// // Find the buyer with the most pets.
orm.findClientsParties("parties", "clients", "client_id", "id");
