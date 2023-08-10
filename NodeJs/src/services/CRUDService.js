const bcrypt = require('bcrypt');
const db = require('../models/index.js');

const salt = bcrypt.genSaltSync(10);

let createNewUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender,
                roleId: data.roleId,
            });

            resolve('create a new user success!');
        } catch (e) {
            reject(e);
        }
    })
}

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashPassword = await bcrypt.hashSync(password, salt)
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true // Sử dụng thằng này để bắt nó trả về cho chúng ta một oject
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    });
}

let getUserInfoById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Tìm kiếm user có id = userId đã gửi qua
            let user = await db.User.findOne({
                where: { id: userId },
                raw: true
            });
            if (user) {
                resolve(user);
            }
            else {
                resolve([]); // Trả về mảng để nó không bị lỗi
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: data.id }
            })
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address

                await user.save();

                // Khi save xong chuyển qua lại file edit
                let allUser = await db.User.findAll();
                resolve(allUser);
            }
            else {
                resolve();
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDeleteCRUD = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: userId }
            })

            if (user) {
                await user.destroy();
            }

            resolve(); // return
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
    getAllUser: getAllUser,
    getUserInfoById: getUserInfoById,
    updateUserData: updateUserData,
    getDeleteCRUD: getDeleteCRUD
}