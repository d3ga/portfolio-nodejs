const nodemailer = require('nodemailer');
const pug = require('pug')
const juice = require('juice')
const htmlToText = require('html-to-text')
const promisify = require('es6-promisify')
const mail = require('../handlers/mail')
const moment =  require('moment')
const { check, body, validationResult } = require('express-validator/check')

exports.validationRules = [
  body(['name', 'email', 'message'], 'Please fill this field').isLength({ min: 1 }),
  body('email', 'Please supply an email').isEmail(),
  body('message', 'Please supply a message').isLength({ min: 1 }),
  // body('message', 'BB Code is not allowed!').notMatch(/\[[^\]]+\]/g)
]

exports.errorHandling = (request,response, next) => {
  const errors = validationResult(request)

  if (!errors.isEmpty()) {
    return response.status(422).json({
      code: 422,
      message: 'You message could not be send! Please check your data.',
      errors: errors.mapped()
    })
  }
  next()
}

exports.submitForm = async (request, response) => {
  try {
    const dateNow = moment().format('YYYY-MM-DD HH:mm')

    await mail.send({
      filename: 'contactForm',
      subject: `Contact Form - ${dateNow}`,
      replyTo: request.body.email, 
      name: request.body.name,
      email: request.body.email,
      message: request.body.message
    })
  } catch (error) {
    return response.json({
      code: 500,
      message: 'Something went wrong while sending the form. Please try again later.'
    })
  }

  return response.json({
    code: 200,
    message: 'OK'
  })
}