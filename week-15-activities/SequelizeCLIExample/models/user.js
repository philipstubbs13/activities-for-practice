module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        age: DataTypes.INTEGER,
        name: DataTypes.STRING
    });
    return User;
}