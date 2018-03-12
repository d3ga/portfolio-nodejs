const express = require('express');
const router = express.Router();

// The main route
router.get('/', (request, response) => {
  response.render('layout', {
    title: 'Kostas Degaitas',
    description: 'Hello I am kostas'
  })
});

module.exports = router;
