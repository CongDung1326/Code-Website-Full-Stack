'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Chuyển dữ liệu từ (B) -> (A) (Allcode) -> (User)
      User.belongsTo(models.Allcode, { foreignKey: 'positionId', targetKey: 'keyMap', as: 'positionData' }); // Dựa theo positionId chủ yếu lấy tại keyMap(Allcode) với tên là positionData(Đặt tên để tránh bị trùng)
      User.belongsTo(models.Allcode, { foreignKey: 'gender', targetKey: 'keyMap', as: 'genderData' }); // Dựa theo gender chủ yếu lấy tại keyMap(Allcode) với tên là positionData(Đặt tên để tránh bị trùng)
      User.hasOne(models.Markdown, { foreignKey: 'doctorId' }) // Tham chiếu thằng Markdown (giống như thằng User gửi thư)
      User.hasOne(models.Doctor_Info, { foreignKey: 'doctorId', as: 'DoctorInfo' })
      User.hasMany(models.Schedule, { foreignKey: 'doctorId', as: 'doctorData' })
    }
  };
  User.init({
    // Coi kiểu dữ liệu ở sequelize datatypes
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    address: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    gender: DataTypes.STRING,
    image: DataTypes.BLOB('long'),
    roleId: DataTypes.STRING,
    positionId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};