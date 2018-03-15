const nodemailer = require('nodemailer');
const pug = require('pug')
const juice = require('juice')
const htmlToText = require('html-to-text')
const promisify = require('es6-promisify')
const mail = require('../handlers/mail')
const moment =  require('moment')

exports.submitForm = async (request, response) => {
  
  const email = request.body.email
  const message = request.body.message
  const subject = request.body.name 

  const dateNow = moment().format('YYYY-MM-DD HH:mm')

  try {
    await mail.send({
      filename: 'contactForm',
      subject: `Contact Form - ${dateNow}`,
      to: [
        'degakon@gmail.com'
      ],
      name: request.body.name,
      email: request.body.email,
      message: request.body.message
    })
  } catch (error) {
    return response.json({
      code: 500,
      message: error.message
    })
  }

  return response.json({
    code: 200,
    message: 'OK'
  })
}
