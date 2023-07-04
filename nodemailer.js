'use strict'
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: '***',
    pass: '***'
  }
})

// async..await is not allowed in global scope, must use a wrapper
async function main () {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '***', // sender address
    to: '***', // list of receivers
    subject: 'Que lo que mama huevo', // Subject line
    text: 'Mensaje nuevo nuevito', // plain text body
    html: '<b>Hello world?</b>' // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  //
  // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
  //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
  //       <https://github.com/forwardemail/preview-email>
  //
}

main().catch(console.error)
