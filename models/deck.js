module.exports = (sequelize, DataTypes) => {
    const Deck = sequelize.define('deck', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        playerId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        formatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        yearId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        decklist: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return Deck;
}