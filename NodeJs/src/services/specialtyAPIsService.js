const db = require('../models/index.js') // Lấy dữ liệu database

let createNewSpecialty = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown || !data.image) resolve({ errCode: 1, message: 'Missing parameter!' })
            else {
                await db.Specialty.create({
                    name: data.name,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    image: data.image,
                })

                resolve({
                    errCode: 0,
                    message: 'OK',
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getAllSpecialty = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let specialty = await db.Specialty.findAll()
            if (specialty && specialty.length > 0) {
                specialty.map(item => {
                    item.image = new Buffer.from(item.image, 'base64').toString('binary');
                })
            }

            resolve({
                errCode: 0,
                specialties: specialty,
            })

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
}