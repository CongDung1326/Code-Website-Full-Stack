const db = require('../models/index.js') // Lấy dữ liệu database

let createNewClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.descriptionHTML || !data.descriptionMarkdown || !data.image || !data.address) resolve({ errCode: 1, message: 'Missing parameter!' })
            else {
                await db.Clinic.create({
                    name: data.name,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown,
                    image: data.image,
                    address: data.address,
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

let getAllClinic = (id, location) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id || !location) resolve({ errCode: 1, message: 'Missing parameter!' })
            else {
                if (id === 'all' || id === 'ALL') {
                    let clinic = await db.Clinic.findAll();
                    if (clinic && clinic.length > 0) {
                        clinic.map(item => {
                            item.image = new Buffer.from(item.image, 'base64').toString('binary');
                        })
                    }

                    resolve({
                        errCode: 0,
                        clinics: clinic,
                    })
                }
                else {
                    let clinic = await db.Clinic.findOne({
                        where: { id: id },
                        raw: true,
                    })
                    if (clinic) {
                        clinic.image = new Buffer.from(clinic.image, 'base64').toString('binary');

                        if (location === 'ALL' || location === 'all') {
                            let doctorInfo = await db.Doctor_Info.findAll({
                                where: { clinicId: id },
                                attributes: ['doctorId', 'clinicId'],
                            })

                            clinic.doctorInfo = doctorInfo
                        }
                        resolve({
                            errCode: 0,
                            clinics: clinic,
                        })
                    }

                    resolve({
                        errCode: 0,
                        clinics: {},
                    })
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewClinic: createNewClinic,
    getAllClinic: getAllClinic,
}