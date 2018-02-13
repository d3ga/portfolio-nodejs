const express = require('express');
const router = express.Router();

// The main route
router.get('/', (request, response) => {
  response.render('home', {
    title: 'Home',
    description: 'Hello I am Dega'
  })
});

// About
router.get('/about', (request, response) => {
  response.render('about', {
    title: 'About',
    description: 'About Me'
  })
});

// Projects
router.get('/projects', (request, response) => {
  response.render('projects', {
    title: 'Projects',
    description: 'Projects'
  })
});

// Contact
router.get('/contact', (request, response) => {
  response.render('contact', {
    title: 'Contact',
    description: 'Contact'
  })
});

module.exports = router;
