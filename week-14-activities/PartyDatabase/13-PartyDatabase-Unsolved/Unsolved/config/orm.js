var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectNames: function(tableCol, table) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [tableCol, table], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  selectWhere: function(table, whereCol, whereCondition) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";
    console.log(queryString);
    connection.query(queryString, [table, whereCol, whereCondition], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  findClientsParties: function(tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
    var queryString =
      "SELECT * FROM ?? AS tOne LEFT JOIN ?? AS tTwo ON tOne.??= tTwo.??";

    connection.query(
      queryString,
      [tableOne, tableTwo, onTableOneCol, onTableTwoCol],
      function(err, result) {
        if (err) throw err;
        console.log(result);
      }
    );
  }
};

module.exports = orm;
