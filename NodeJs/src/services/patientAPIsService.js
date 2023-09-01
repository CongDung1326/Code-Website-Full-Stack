const db = require('../models/index.js') // Lấy dữ liệu database
const emailService = require('./emailService.js');
const uuid = require('uuid');
require('dotenv').config();

let buildUrlEmail = (token, doctorId) => {
    let result = `${process.env.URL_REACT}/verify-booking?token=${token}&doctorId=${doctorId}`;
    return result;
}

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.language || !data.email || !data.doctorId || !data.timeType || !data.date) resolve({ errCode: 1, message: 'Missing parameter!' })
            else {
                let [user, isCreate] = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                        lastName: data.fullName,
                        phoneNumber: data.phoneNumber,
                        address: data.address,
                        gender: data.gender,
                    },
                    raw: true,
                })

                if (user) {
                    let token = uuid.v4(); // '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

                    let [booking, isCreate] = await db.Booking.findOrCreate({
                        where: { patientId: user.id, timeType: data.timeType, date: data.date },
                        defaults: {
                            statusId: 'S1',
                            patientId: user.id,
                            date: data.date,
                            timeType: data.timeType,
                            doctorId: data.doctorId,
                            token: token,
                        }
                    })

                    if (isCreate === true) {
                        await emailService.sendSimpleEmail({
                            receiverEmail: data.email,
                            fullName: data.fullName,
                            timePlace: data.timePlace,
                            datePlace: data.datePlace,
                            nameDoctor: data.nameDoctor,
                            redirectLink: buildUrlEmail(token, data.doctorId),
                            language: data.language,
                        })

                        resolve({
                            errCode: 0,
                            message: 'Save schedule succesed!'
                        })
                    }
                    else {
                        resolve({
                            errCode: 0,
                            message: 'Schedule is exist!'
                        })
                    }
                }
            }
        } catch (e) {
            reject(e);
        }
    })
}

let postVerifyBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (data.doctorId && data.token) {
                let booking = await db.Booking.findOne({
                    where: { doctorId: data.doctorId, token: data.token, statusId: 'S1' },
                })
                if (booking) {
                    booking.statusId = 'S2'

                    await booking.save();
                    resolve({
                        errCode: 0,
                        message: 'Update the appointment succesed!',
                    })
                }
                else {
                    resolve({
                        errCode: 2,
                        message: 'Appointment has been activated or does not exist!',
                    })
                }
            }
            else {
                resolve({
                    errCode: 1,
                    message: 'Missing parameter!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getListPatientForDoctor = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.doctorId || !data.date) resolve({ errCode: 1, message: 'Missing parameter!' })
            else {
                let booking = await db.Booking.findAll({
                    where: { doctorId: data.doctorId, date: data.date, statusId: 'S2' },
                    include: [
                        {
                            model: db.User, as: 'patientData', attributes: ['email', 'lastName', 'gender', 'address'],
                            include: [
                                { model: db.Allcode, as: 'genderData', attributes: ['valueVi', 'valueEn'] }
                            ],
                        },
                        { model: db.Allcode, as: 'timePatient', attributes: ['valueVi', 'valueEn'] },
                    ],
                    nest: true,
                })

                resolve({
                    errCode: 0,
                    booking: booking,
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    postBookAppointment: postBookAppointment,
    postVerifyBookAppointment: postVerifyBookAppointment,
    getListPatientForDoctor: getListPatientForDoctor,
}