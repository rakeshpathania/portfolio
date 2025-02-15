const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8080;
const bodyparser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
const Validator = require('validatorjs');


app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

let email_data = {
    smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USERNAME,
            pass: process.env.SMTP_PASSWORD,
        },
    },
    from: process.env.EMAIL_FROM,
}

const firstError = async (validation) => {
    let first_key = Object.keys(validation.errors.errors)[0];
    return validation.errors.first(first_key);

}
app.post('/sendmail', async (req, res) => {
    try {
        const { email, name, jobtype, message } = req.body;

        const validation = new Validator(req.body, {
            name: "required",
            email: "required|email",
            jobtype: "required",
            message: "required",
        });

        if (validation.fails()) return res.status(400).json({ success: false, code: 400, message: await firstError(validation) });

        const content = {
            to: "rakeshpathania330@gmail.com",
            from: email_data.from,
            subject: "Job Offers",
            html: `
          <h5>Details Information:</h5>
          <ul>
            <li><p>Name: ${name}</p></li>
            <li><p>E-mail: ${email}</p></li>
            <li><p>Job Type: ${jobtype}</p></li>
            <li><p>Message: ${message}</p></li>
          </ul>
        `
        };
        const transport = nodemailer.createTransport(email_data.smtp);
        await transport.sendMail(content);
        transport.close();

        res.status(200).json({
            success: true,
            code: 200,
            message: "Mail sent successfully",
        });
    } catch (err) {
        console.log(`error: ${err}`);
    }
});


app.listen(PORT, (req, res) => {
    console.log(`server is listen on ${PORT}`);
})