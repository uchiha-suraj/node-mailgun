require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_URL,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

sendmail = () => {
  let mainOptions = {
    from: 'info-noreply@example.com',
    to: 'suraj.developer.777@gmail.com',
    subject: 'This is a test mail',
    html: `<h1>This is not span. </h1>`,
  }

  transporter.sendMail(mainOptions, (err, info) => {
    if(err) {
      console.log(err);
    } else {
      console.log(`mail sent ${info.response}`)
    }
  })
}

sendmail();