import './bootstrap.js'

window.addEventListener('scroll', function () {
    document.body.classList[
      window.scrollY > window.innerHeight / 1.04 ? 'add': 'remove'
    ]('scrolled');
  });