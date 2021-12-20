const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Visited extends Model {
}

Visited.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    refernces:{
        model:'user',
        key:'user_id'
    }   
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'visited',
  } 
);

module.exports = User;
