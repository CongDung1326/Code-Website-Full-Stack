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
            Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' });
            Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' });
        }
    };
    Allcode.init({
        // Coi kiểu dữ liệu ở sequelize datatypes
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING, // Hỗ trợ tiếng anh
        valueVi: DataTypes.STRING // Hỗ trợ tiếng việt
    }, {
        sequelize,
        modelName: 'Allcode', // Coppy paste thì sửa
    });
    return Allcode;
};