export default function (req, res) {
    const nodemailer = require('nodemailer');
    require('dotenv').config()
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.MAIL,
            pass: process.env.PASS,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.MAIL,
        to: process.env.MAILTO,
        subject: `Prośba o wycenę od ${req.body.name} (${req.body.email})`,
        text: req.body.message,
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
}