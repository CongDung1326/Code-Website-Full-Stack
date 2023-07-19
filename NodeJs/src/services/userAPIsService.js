const db = require('../models/index.js') // Lấy dữ liệu database
const bcrypt = require('bcrypt');

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};

            let isExit = await checkUserEmail(email);

            if (isExit) {
                let user = await db.User.findOne({
                    where: { email: email },
                    attributes: ['email', 'roleId', 'password'], // Chỉ lấy những cột cần thiết (Lấycột password để đăng nhập vào sau đó xoá nó đi để người call không thấy)
                    raw: true
                });

                if (user) {
                    let check = await bcrypt.compareSync(password, user.password)
                    if (check) {
                        userData.errCode = 0;
                        userData.errMessage = 'ok';

                        delete user.password; // Xoá password để cho người call API không nhìn thấy được
                        userData.user = user;
                    } else {
                        userData.errCode = 3;
                        userData.errMessage = 'Wrong password';
                    }
                }
                else {
                    userData.errCode = 2;
                    userData.errMessage = `User's not found`;
                }
            }
            else {
                userData.errCode = 1;
                userData.errMessage = `Your email: ${email} isn't exits in your system. Plz try other email!`;
            }
            resolve(userData);
        } catch (e) {
            reject(e);
        }
    })
}

let checkUserEmail = (email) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { email: email },
                raw: true
            });
            if (user) {
                resolve(true);
            }
            resolve(false);
        } catch (e) {
            reject(e);
        }
    })
}

let getALlUsers = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check nếu không truyền vào id
            if (id) {
                // Check id là ALL hay một id người dùng
                if (id === 'all' || id === 'ALL') {
                    let users = await db.User.findAll({
                        attributes: {
                            exclude: ['password']
                        }
                    });
                    resolve(users);
                }

                let user = await db.User.findOne({
                    where: { id: id },
                    attributes: {
                        exclude: ['password']
                    },
                });

                // check user
                if (user) {
                    console.log(user);
                    resolve(user)
                }
            }
            resolve(`can't find id user`);
        } catch (e) {
            reject(e);
        }
    })
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Check email if exist
            let check = await checkUserEmail(data.email);
            if (check === true) {
                resolve({
                    errCode: 1,
                    message: 'Your email is already in used, Plz try another email!'
                })
            }

            let hashPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.User.create({
                email: data.email,
                password: hashPasswordFromBcrypt,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            });

            resolve({
                errCode: 0,
                message: 'Create new user success!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

const salt = bcrypt.genSaltSync(10);

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

let deleteUser = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: id } });
            if (!user) {
                resolve({
                    errCode: 2,
                    message: `The user isn't exist`
                })
            }

            await user.destroy();

            resolve({
                errCode: 0,
                message: 'Delete user success!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

let updateUserData = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: data.id } });
            if (!user) {
                resolve({
                    errCode: 2,
                    message: `The user isn't exist`
                })
            }

            user.firstName = data.firstName;
            user.lastName = data.lastName;
            user.address = data.address;

            await user.save();
            resolve({
                errCode: 0,
                message: 'Edit user success!'
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
    getALlUsers: getALlUsers,
    createNewUser: createNewUser,
    deleteUser: deleteUser,
    updateUserData: updateUserData
}