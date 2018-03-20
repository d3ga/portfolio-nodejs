const nodemailer = require('nodemailer')
const pug = require('pug')
const juice = require('juice')
const htmlToText = require('html-to-text')
const promisify = require('es6-promisify')


const generateHTML = (filename, options = {}) => {
    const html = pug.renderFile(
        `${__dirname}/../views/email/${filename}.pug`,
        options
    )

    const inlined = juice(html)
    return inlined
}

exports.send = async (options) => {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
  })

  const html = generateHTML(options.filename, options)
  const text = htmlToText.fromString(html)

  const mailOptions = {
      from: process.env.MAIL_FROM || null,
      to: options.to || process.env.MAIL_TO,
      replyTo: options.replyTo,
      subject: options.subject,
      html,
      text
  }
  
  const sendMail = promisify(transport.sendMail, transport)
  return sendMail(mailOptions)
}
