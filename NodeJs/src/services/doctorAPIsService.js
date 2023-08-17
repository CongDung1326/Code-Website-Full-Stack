const db = require('../models/index.js') // Lấy dữ liệu database

let getDoctorHome = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll({
                where: { roleId: 'R2' },
                limit: limit,
                attributes: {
                    exclude: ['password']
                },
                include: [
                    { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] }, // Xuất thêm giá trị tại allCode có giá trị tên là (positionData) xuất giá trị valueEn và valueVi
                    { model: db.Allcode, as: 'genderData', attributes: ['valueEn', 'valueVi'] }, // Xuất thêm giá trị tại allCode có giá trị tên là (genderData) xuất giá trị valueEn và valueVi
                ],
                nest: true,
            });

            resolve({
                errCode: 0,
                data: doctors,
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getAllDoctor = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let doctors = await db.User.findAll(
                {
                    where: { roleId: 'R2' },
                    attributes: {
                        exclude: ['password', 'image']
                    },
                });

            resolve({
                errCode: 0,
                data: doctors,
            });
        } catch (e) {
            reject(e);
        }
    })
}

let postCreateInfoDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.contentHTML || !data.contentMarkdown) resolve({ errCode: 1, message: "Missing parameter" })
            else {
                await db.Markdown.create({
                    contentHTML: data.contentHTML,
                    contentMarkdown: data.contentMarkdown,
                    description: data.description,
                    doctorId: data.id,
                })

                resolve({
                    errCode: 0,
                    message: 'Create info doctor success!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getDetailDoctor = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!id) {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter!'
                })
            }
            else {
                let detail = await db.User.findOne({
                    where: { id: id, roleId: 'R2' },
                    attributes: {
                        exclude: ['password', 'image']
                    },
                    include: [
                        { model: db.Markdown, as: 'Markdown', attributes: ['contentHTML', 'contentMarkdown', 'description'] },
                        { model: db.Allcode, as: 'positionData', attributes: ['valueEn', 'valueVi'] },
                    ],
                    nest: true,

                })

                resolve({
                    errCode: 0,
                    data: detail
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getDoctorHome: getDoctorHome,
    getAllDoctor: getAllDoctor,
    postCreateInfoDoctor: postCreateInfoDoctor,
    getDetailDoctor: getDetailDoctor,
}