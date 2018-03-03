import './bootstrap.js'

// Change navbar style on scroll

window.addEventListener('scroll', function () {
    document.body.classList[
      window.scrollY > window.innerHeight / 1.04 ? 'add': 'remove'
    ]('scrolled');
  });

// Smooth scroll

var $root = $('html, body');

$('a[href^="#"]').click(function() {
    var href = $.attr(this, 'href');

    $root.animate({
        scrollTop: $(href).offset().top
    }, 1000, function () {
        window.location.hash = href;
    });

    return false;
});
