import './bootstrap.js'
import contactForm from './contactForm'

contactForm()

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

// Display elements with delay
const hoveredElement = document.querySelectorAll('.project-thumbnail')

hoveredElement.forEach(function(element) {
    element.addEventListener('mouseenter', function() {
        setTimeout(() => {
            this.querySelector('.project-title').style.opacity= '1';

            setTimeout(() => {
                this.querySelector('.project-description').style.opacity= '1';
            }, 400)
        }, 300)
    })
})

hoveredElement.forEach(function(element) {
    element.addEventListener('mouseleave', function() {
        setTimeout(() => {
            this.querySelector('.project-title').style.opacity= '0';

            setTimeout(() => {
                this.querySelector('.project-description').style.opacity= '0';
            }, 10)
        }, 10)
    })
})

//Progress Bars Animation

$.fn.isInViewport = function() {
	var elementTop = $(this).offset().top;
	var elementBottom = elementTop + $(this).outerHeight();
	var viewportTop = $(window).scrollTop();
	var viewportBottom = viewportTop + $(window).height();
	return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on('resize scroll', function() {
	$('.progress').each(function() {
		if ($(this).isInViewport()) {
			var bar = $(this).find('.progress-bar');
			bar.addClass('progress-animate');
			bar.css('width', bar.attr('aria-valuenow') + '%');

		}
	});
});
