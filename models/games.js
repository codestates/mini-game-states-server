// const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const Games = sequelize.define(
    'Games',
    {
      name: {
        type:DataTypes.STRING,
        allowNull:false
      },
      created_at: {
        type:DataTypes.DATETIME,
      }
    },
    {}
  );
  Games.associate = (models) => {
    Games.hasMany(models.Scores)
  }
  return Games
}