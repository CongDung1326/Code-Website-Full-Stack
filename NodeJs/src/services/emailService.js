require('dotenv').config();
const nodemailer = require("nodemailer");

let sendSimpleEmail = async (data) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            // TODO: replace `user` and `pass` values from <https://forwardemail.net>
            user: process.env.APP_EMAIL,
            pass: process.env.APP_EMAIL_PASSWORD,
        },
    });

    let info = await transporter.sendMail({
        from: '"Don Vau 👻" <donvau0103@gmail.com>', // sender address
        to: data.receiverEmail, // list of receivers
        subject: (data.language === 'vi') ? "Thông tin đặt lịch khám bệnh" : 'Information to book a medical appointment', // Subject line
        html: handleSendBodyEmail(data)
    })
}

let handleSendBodyEmail = (data) => {
    let result = '';
    if (data && data.language === 'vi') {
        result =
            `
            <h3>Xin chào ${data.fullName}!</h3>
            <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Don Vau website.</p>
            <p>Thông tin đặt lịch khám bệnh:</p>
            <h4>Thời gian ${data.timePlace} ${data.datePlace}</h4>
            <h4>Bác sĩ: ${data.nameDoctor}</h4>
            <p>Nếu các thông tin này là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>
            <a href=${data.redirectLink}>Bấm vào đây</a>
            <p>Xin chân thành cảm ơn</p>
            ` // html body
            ;
    }
    if (data && data.language === 'en') {
        result =
            `
            <h3>Hello ${data.fullName}!</h3>
            <p>You received this email because you booked an online medical appointment on the Don Vau website.</p>
            <p>Information to schedule an appointment:</p>
            <h4>Time ${data.timePlace} ${data.datePlace}</h4>
            <h4>Doctor: ${data.nameDoctor}</h4>
            <p>If this information is true, please click on the link below to confirm and complete the procedure to book an appointment.</p>
            <a href=${data.redirectLink}>Click here</a>
            <p>Sincerely thank</p>
            ` // html body
            ;
    }

    return result;
}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
}