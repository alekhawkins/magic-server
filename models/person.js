module.exports = (sequelize, DataTypes) => {
    const Person = sequelize.define('person', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        shortName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bioPicture: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Person;
}