'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcode extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Allcode.init({
        // Coi kiểu dữ liệu ở sequelize datatypes
        key: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING, // Hỗ trợ tiếng anh
        valueVi: DataTypes.STRING // Hỗ trợ tiếng việt
    }, {
        sequelize,
        modelName: 'Allcode', // Coppy paste thì sửa
    });
    return Allcode;
};