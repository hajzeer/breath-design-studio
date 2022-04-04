export default function (req, res) {
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'demo@demo.gmail',
            pass: 'password',
        },
        secure: true,
    });


}