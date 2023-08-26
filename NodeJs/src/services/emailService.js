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

    const info = await transporter.sendMail({
        from: '"Don Vau 👻" <donvau0103@gmail.com>', // sender address
        to: data.receiverEmail, // list of receivers
        subject: "Thông tin đặt lịch khám bệnh", // Subject line
        html: `
        <h3>Xin chào ${data.fullName}!</h3>
        <p>Bạn nhận được email này vì đã đặt lịch khám bệnh online trên Don Vau website.</p>
        <p>Thông tin đặt lịch khám bệnh:</p>
        <h4>Thời gian ${data.timeType} ${data.date}</h4>
        <h4>Bác sĩ: ${data.nameDoctor}</h4>
        <p>Nếu các thông tin này là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh.</p>
        <a href=${data.redirectLink}>Click here</a>
        <p>Xin chân thành cảm ơn</p>
        `, // html body
    });

}

module.exports = {
    sendSimpleEmail: sendSimpleEmail,
}