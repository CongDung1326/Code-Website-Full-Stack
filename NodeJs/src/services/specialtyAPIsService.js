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

let getAllSpecialty = (id, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id || !location) resolve({ errCode: 1, message: 'Missing parameter' })
            else {
                if (id === 'ALL' || id === 'all') {
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
                }
                else {
                    let specialty = await db.Specialty.findOne({
                        where: { id: id },
                        attributes: ['name', 'descriptionHTML', 'descriptionMarkdown'],
                        raw: true
                    })

                    if (specialty) {
                        if (location === 'ALL' || location === 'all') {
                            let doctorInfo = await db.Doctor_Info.findAll({
                                where: { specialtyId: id },
                                attributes: ['doctorId', 'provinceId'],
                            })

                            specialty.doctorInfo = doctorInfo
                        }
                        else {
                            let doctorInfo = await db.Doctor_Info.findAll({
                                where: { specialtyId: id, provinceId: location },
                                attributes: ['doctorId', 'provinceId'],
                            })

                            specialty.doctorInfo = doctorInfo
                        }
                        resolve({
                            errCode: 0,
                            specialties: specialty,
                        })
                    }
                    else resolve({ errCode: 0, specialties: `Can't find specialty!` })
                }
            }

        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewSpecialty: createNewSpecialty,
    getAllSpecialty: getAllSpecialty,
}