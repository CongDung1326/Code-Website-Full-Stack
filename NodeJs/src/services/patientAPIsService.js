const db = require('../models/index.js') // Lấy dữ liệu database
require('dotenv').config();

let postBookAppointment = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.email) resolve({ errCode: 1, message: 'Missing parameter!' })
            else {
                let [user, isCreate] = await db.User.findOrCreate({
                    where: { email: data.email },
                    defaults: {
                        email: data.email,
                        roleId: 'R3',
                    },
                    raw: true,
                })

                if (user) {
                    await db.Booking.findOrCreate({
                        where: { patientId: user.id },
                        defaults: {
                            statusId: 'S1',
                            patientId: user.id,
                            date: data.date,
                            timeType: data.timeType,
                            doctorId: data.doctorId,
                        }
                    })
                }

                resolve({
                    errCode: 0,
                    message: 'Save schedule succesed!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    postBookAppointment: postBookAppointment,
}