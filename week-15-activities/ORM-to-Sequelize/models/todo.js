module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
        text: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Complete: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Todo;
}