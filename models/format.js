module.exports = (sequelize, DataTypes) => {
    const Format = sequelize.define('format', {
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
        decklistId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Format;
}