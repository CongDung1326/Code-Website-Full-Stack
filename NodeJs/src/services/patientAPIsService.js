const db = require('../models/index.js') // Lấy dữ liệu database
const emailService = require('./emailService.js');
require('dotenv').config();

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email || !data.doctorId || !data.timeType || !data.date) resolve({ errCode: 1, message: 'Missing parameter!' })
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
                    let [booking, isCreate] = await db.Booking.findOrCreate({
                        where: { patientId: user.id, timeType: data.timeType, date: data.date },
                        defaults: {
                            statusId: 'S1',
                            patientId: user.id,
                            date: data.date,
                            timeType: data.timeType,
                            doctorId: data.doctorId,
                        }
                    })

                    if (isCreate === true) {
                        await emailService.sendSimpleEmail({
                            receiverEmail: data.email,
                            fullName: data.fullName,
                            timePlace: '9:00 - 10:00',
                            datePlace: 'Chủ nhật',
                            nameDoctor: 'Hoàng Công Dũng',
                            redirectLink: 'https://www.facebook.com/CdungDepTry'
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

module.exports = {
    postBookAppointment: postBookAppointment,
}