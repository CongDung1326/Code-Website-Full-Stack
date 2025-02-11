const db = require('../models/index.js') // Lấy dữ liệu database
const bcrypt = require('bcrypt');

const createNewHandbook = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.image) return resolve({ errCode: 1, message: "Missing parameter!" });

            await db.Handbook.create({
                name: data.name,
                image: data.image
            });

            return resolve({
                errCode: 0,
                message: "OK"
            });
        } catch (e) {
            return reject(e);
        }
    })
}

const getAllHandbook = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) return resolve({ errCode: 1, message: 'Missing parameter' });
            if (id.toLowerCase() === "all") {
                let handbook = await db.Handbook.findAll();
                if (handbook && handbook.length > 0) {
                    handbook.map(item => {
                        item.image = new Buffer.from(item.image, 'base64').toString('binary');
                    })

                    return resolve({
                        errCode: 0,
                        handbooks: handbook
                    })
                }
            }
            let handbook = await db.Handbook.findOne({
                where: { id: id },
                attributes: ['name', 'image'],
                raw: true
            })
            if (handbook) {
                handbook.image = new Buffer.from(handbook.image, 'base64').toString('binary');

                return resolve({
                    errCode: 0,
                    handbooks: handbook
                })
            }

            return resolve({ errCode: 0, handbooks: `Can't find hanndbook!` });
        } catch (e) {
            return reject(e);
        }
    })
}

const deleteHandbook = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) return resolve({ errCode: 1, message: 'Missing parameter' });
            let handbook = await db.Handbook.findOne({ where: { id: id } });
            if (!handbook) {
                return resolve({
                    errCode: 2,
                    message: `The handbook isn't exist`
                })
            }

            await handbook.destroy();

            return resolve({
                errCode: 0,
                message: 'OK'
            })
        } catch (e) {
            return reject(e);
        }
    })
}

module.exports = {
    createNewHandbook: createNewHandbook,
    getAllHandbook: getAllHandbook,
    deleteHandbook: deleteHandbook,
}