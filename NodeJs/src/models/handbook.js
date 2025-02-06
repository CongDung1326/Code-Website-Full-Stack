'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Handbook extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Handbook.init({
        // Coi kiểu dữ liệu ở sequelize datatypes
        name: DataTypes.STRING,
        image: DataTypes.BLOB('long'),
    }, {
        sequelize,
        modelName: 'Handbook',
    });
    return Handbook;
};