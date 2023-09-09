'use strict';

const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Clinic extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ;
  Clinic.init({
    // Coi kiểu dữ liệu ở sequelize datatypes
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    descriptionHTML: DataTypes.TEXT('long'),
    descriptionMarkdown: DataTypes.TEXT('long')
  }, {
    sequelize,
    modelName: 'Clinic'
  });
  return Clinic;
};