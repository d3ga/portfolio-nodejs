const express = require('express');
const router = express.Router();
const { catchErrors } = require('../handlers/errorHandlers')
const ContactFormController = require('../controllers/ContactFormController')

// The main route
router.get('/', (request, response) => {
  response.render('home', {
    title: 'Kostas Degaitas',
    description: 'Hello I am Kostas'
  })
});

router.post('/contact',
  ContactFormController.validationRules,
  ContactFormController.errorHandling,
  catchErrors(ContactFormController.submitForm)
)
module.exports = router;
