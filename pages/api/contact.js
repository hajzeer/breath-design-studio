export default function (req, res) {
    const nodemailer = require('nodemailer');
    require('dotenv').config()
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.PUBLIC_NEXT_MAIL,
            pass: process.env.PUBLIC_NEXT_PASS,
        },
        secure: true,
    });

    const mailData = {
        from: process.env.PUBLIC_NEXT_MAIL,
        to: process.env.PUBLIC_NEXT_MAILTO,
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