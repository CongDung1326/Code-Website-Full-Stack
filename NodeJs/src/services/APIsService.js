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
                    attributes: ['email', 'roleId', 'password'], // Chỉ lấy những cột cần thiết
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

module.exports = {
    handleUserLogin: handleUserLogin,
}