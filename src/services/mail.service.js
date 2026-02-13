const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');
const { mailConfig } = require('../config/mail.config');

const sendMail = async (to) => {
  const transporter = nodemailer.createTransport(mailConfig);

  const templatePath = path.join(__dirname, '../templates/confirmation.html');
  const html = fs.readFileSync(templatePath, 'utf8');

  await transporter.sendMail({
    from: `"San Valentín 💖" <${process.env.MAIL_USER}>`,
    to,
    subject: '💌 Nuestra cita está confirmada',
    html
  });
};

module.exports = { sendMail };
