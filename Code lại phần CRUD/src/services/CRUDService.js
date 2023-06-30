const db = require('../models/index.js');

let createUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.create({
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: (data.gender === '1') ? true : false,
                roleId: data.roleId,
            });

            resolve('Create a new user succesed!');
        }
        catch (e) {
            reject(e);
        }
    })
}

let findAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let allUser = await db.User.findAll({
                raw: true
            });

            resolve(allUser);
        } catch (e) {
            reject(e);
        }
    })
}

let findUserById = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataUser = await db.User.findOne({
                where: { id: userId },
                raw: true
            })
            if (dataUser) {
                resolve(dataUser);
            }
            else {
                resolve([]); // Trả về mảng để không bị lỗi
            }
        } catch (e) {
            reject(e);
        }
    })
}

let updateUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Kiểm tra xem user có tồn tại hay không?
            let user = await db.User.findOne({
                where: { id: data.id }
            });
            if (user) {
                user.firstName = data.firstName;
                user.lastName = data.lastName;
                user.address = data.address;

                // Update xong thì trả về lại trang edit-crud
                await user.save();

                let allUser = await db.User.findAll({
                    raw: true
                });
                resolve(allUser);
            }
            let allUser = await db.User.findAll({
                raw: true
            });
            resolve(allUser);
        } catch (e) {
            reject(e);
        }
    })
}

let deleteCRUD = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Kiểm tra xem user có tồn tại hay không
            let user = await db.User.findOne({ where: { id: userId } });
            if (user) {
                await user.destroy();

                let allUser = await db.User.findAll({ raw: true });
                resolve(allUser);
            }
            let allUser = await db.User.findAll({
                raw: true
            });
            resolve(allUser);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createUser: createUser,
    findAllUser: findAllUser,
    findUserById: findUserById,
    updateUser: updateUser,
    deleteCRUD: deleteCRUD
}