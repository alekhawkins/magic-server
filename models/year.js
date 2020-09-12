module.exports = (sequelize, DataTypes) => {
    const Year = sequelize.define('year', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        playerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        formatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    })
    return Year;
}