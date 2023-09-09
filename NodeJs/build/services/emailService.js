"use strict";

require("core-js/modules/es.promise.js");
require('dotenv').config();
const nodemailer = require("nodemailer");
let sendSimpleEmail = async data => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  });
  let info = await transporter.sendMail({
    from: '"Don Vau 👻" <donvau0103@gmail.com>',
    // sender address
    to: data.receiverEmail,
    // list of receivers
    subject: data.language === 'vi' ? "Thông tin đặt lịch khám bệnh" : 'Information to book a medical appointment',
    // Subject line
    html: handleSendBodyEmail(data)
  });
};
let handleSendBodyEmail = data => {
  let result = '';
  if (data && data.language === 'vi') {
    result = "\n            <h3>Xin ch\xE0o ".concat(data.fullName, "!</h3>\n            <p>B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c email n\xE0y v\xEC \u0111\xE3 \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh online tr\xEAn Don Vau website.</p>\n            <p>Th\xF4ng tin \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh:</p>\n            <h4>Th\u1EDDi gian ").concat(data.timePlace, " ").concat(data.datePlace, "</h4>\n            <h4>B\xE1c s\u0129: ").concat(data.nameDoctor, "</h4>\n            <p>N\u1EBFu c\xE1c th\xF4ng tin n\xE0y l\xE0 \u0111\xFAng s\u1EF1 th\u1EADt, vui l\xF2ng click v\xE0o \u0111\u01B0\u1EDDng link b\xEAn d\u01B0\u1EDBi \u0111\u1EC3 x\xE1c nh\u1EADn v\xE0 ho\xE0n t\u1EA5t th\u1EE7 t\u1EE5c \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh.</p>\n            <a href=").concat(data.redirectLink, ">B\u1EA5m v\xE0o \u0111\xE2y</a>\n            <p>Xin ch\xE2n th\xE0nh c\u1EA3m \u01A1n</p>\n            ") // html body
    ;
  }

  if (data && data.language === 'en') {
    result = "\n            <h3>Hello ".concat(data.fullName, "!</h3>\n            <p>You received this email because you booked an online medical appointment on the Don Vau website.</p>\n            <p>Information to schedule an appointment:</p>\n            <h4>Time ").concat(data.timePlace, " ").concat(data.datePlace, "</h4>\n            <h4>Doctor: ").concat(data.nameDoctor, "</h4>\n            <p>If this information is true, please click on the link below to confirm and complete the procedure to book an appointment.</p>\n            <a href=").concat(data.redirectLink, ">Click here</a>\n            <p>Sincerely thank</p>\n            ") // html body
    ;
  }

  return result;
};
let sendAttachment = async data => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.APP_EMAIL,
      pass: process.env.APP_EMAIL_PASSWORD
    }
  });
  let info = await transporter.sendMail({
    from: '"Don Vau 👻" <donvau0103@gmail.com>',
    // sender address
    to: data.receiverEmail,
    // list of receivers
    subject: data.language === 'vi' ? "Thông tin đặt lịch khám bệnh" : 'Information to book a medical appointment',
    // Subject line
    html: handleSendAttachment(data),
    attachments: [{
      filename: 'text1.png',
      content: data.image.split('base64')[1],
      encoding: 'base64'
    }]
  });
};
let handleSendAttachment = data => {
  let result = '';
  if (data && data.language === 'vi') {
    result = "\n            <h3>Xin ch\xE0o ".concat(data.fullName, "!</h3>\n            <p>B\u1EA1n nh\u1EADn \u0111\u01B0\u1EE3c email n\xE0y v\xEC \u0111\xE3 \u0111\u1EB7t l\u1ECBch kh\xE1m b\u1EC7nh online tr\xEAn Don Vau website.</p>\n            <p>Th\xF4ng tin \u0111\u01A1n thu\u1ED1c/ho\xE1 \u0111\u01A1n \u0111\u01B0\u1EE3c g\u1EEDi trong file \u0111\xEDnh k\xE8m</p>\n            <p>Xin ch\xE2n th\xE0nh c\u1EA3m \u01A1n</p>\n            ") // html body
    ;
  }

  if (data && data.language === 'en') {
    result = "\n            <h3>Hello ".concat(data.fullName, "!</h3>\n            <p>You received this email because you booked an online medical appointment on the Don Vau website.</p>\n            <p>Prescription/invoice information is sent in the attached file</p>\n            <p>Sincerely thank</p>\n            ") // html body
    ;
  }

  return result;
};
module.exports = {
  sendSimpleEmail: sendSimpleEmail,
  sendAttachment: sendAttachment
};