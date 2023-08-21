const db = require('../models/index.js') // Lấy dữ liệu database
const _ = require('lodash');
require('dotenv').config();

const MAX_NUMBER_SCHEDULE = process.env.MAX_NUMBER_SCHEDULE;

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
                        exclude: ['password']
                    },
                    include: [
                        // Do chưa đặt tên nên phải lấy theo tên của db
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

let putSaveDetailDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id || !data.contentHTML || !data.contentMarkdown)
                resolve({
                    errCode: 1,
                    message: 'Missing parameter!'
                })
            else {
                let markdown = await db.Markdown.findOne({ where: { doctorId: data.id } });
                if (markdown) {
                    markdown.contentHTML = data.contentHTML;
                    markdown.contentMarkdown = data.contentMarkdown;
                    markdown.description = data.description;

                    await markdown.save();

                    resolve({
                        errCode: 0,
                        message: 'Save success!'
                    })
                }
                else
                    resolve({
                        errCode: 2,
                        message: "This doctor doesn't exist",
                    })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let postBulkCreateSchedule = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.arrSchedule || !data.date || !data.doctorId) {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter!',
                })
            }
            else {
                let schedule = data.arrSchedule;
                if (schedule && schedule.length > 0) {
                    schedule = schedule.map(item => ({ ...item, maxNumber: MAX_NUMBER_SCHEDULE }))
                }

                let existing = await db.Schedule.findAll({
                    where: { doctorId: data.doctorId, date: data.date },
                    raw: true,
                })
                if (existing && existing.length > 0) {
                    existing = existing.map(item => {
                        item.date = new Date(item.date).getTime();
                        return item;
                    })
                }

                let toCreate = _.differenceWith(schedule, existing, (a, b) => {
                    return a.timeType === b.timeType && a.date === b.date;
                });

                console.log('===========================');
                console.log('Check schedule: ', toCreate)
                console.log('===========================');
                if (toCreate && toCreate.length > 0) {
                    await db.Schedule.bulkCreate(toCreate);
                }
                resolve({
                    errCode: 0,
                    message: 'OK',
                });
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
    putSaveDetailDoctor: putSaveDetailDoctor,
    postBulkCreateSchedule: postBulkCreateSchedule,
}