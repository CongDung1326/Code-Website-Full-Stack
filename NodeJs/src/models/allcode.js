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
            // Đang truyền dữ liệu (A) -> (B) (Allcode -> User)
            Allcode.hasMany(models.User, { foreignKey: 'positionId', as: 'positionData' }); // Lấy theo giá trị positionId của thằng User với đặt tên là positionData(Đặt tên để tránh bị trùng(Không cần đặt cũng được tại không có column nào tên như vậy))
            Allcode.hasMany(models.User, { foreignKey: 'gender', as: 'genderData' }); // Lấy theo giá trị gender của thằng User với đặt tên là genderData(Đặt tên để tránh bị trùng (Không cần đặt cũng được tại không có column nào tên như vậy))
            Allcode.hasMany(models.Schedule, { foreignKey: 'timeType', as: 'timeData' })
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