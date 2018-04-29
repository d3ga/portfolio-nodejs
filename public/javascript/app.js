import "./bootstrap.js";
import contactForm from "./contactForm";

contactForm();

// Display elements with delay

const hoveredElement = document.querySelectorAll(".project-thumbnail");

hoveredElement.forEach(function(element) {
  element.addEventListener("mouseenter", function() {
    setTimeout(() => {
      this.querySelector(".project-title").style.opacity = "1";

      setTimeout(() => {
        this.querySelector(".project-description").style.opacity = "1";
      }, 400);
    }, 300);
  });
});

hoveredElement.forEach(function(element) {
  element.addEventListener("mouseleave", function() {
    setTimeout(() => {
      this.querySelector(".project-title").style.opacity = "0";

      setTimeout(() => {
        this.querySelector(".project-description").style.opacity = "0";
      }, 10);
    }, 10);
  });
});

// Progress Bars Animation

$.fn.isInViewport = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$(window).on("resize scroll", function() {
  $(".progress").each(function() {
    if ($(this).isInViewport()) {
      var bar = $(this).find(".progress-bar");
      bar.addClass("progress-animate");
      bar.css("width", bar.attr("aria-valuenow") + "%");
    }
  });
});

// Smooth scroll

// Get the height of the navbar
const navbarHeight = $(".navbar").outerHeight();

// Navbar change on scroll
if (!$("body").hasClass("profile")) {
  window.addEventListener("scroll", function() {
    if (window.scrollY > window.innerHeight / 1.1) {
      $("body").addClass("scrolled");
    } else {
      $("body").removeClass("scrolled");
    }
  });
}

// Smooth Scrolling for links
const $root = $("html, body");

$('a[href^="#"]').click(function(e) {
  e.preventDefault();

  let href = $.attr(this, "href");
  const newPosition = $(href).offset().top - navbarHeight + 5;
  console.log(newPosition);

  if (history.pushState) {
    history.pushState(null, null, href);
  }

  $root.animate(
    {
      scrollTop: newPosition
    },
    1000,
    function() {
      if (!history.pushState) {
        location.hash = `/${href}`;
      }
    }
  );

  return false;
});

// Scroll spy
const scrollspy = document.querySelector("#nav-main");

if (scrollspy) {
  $("body").scrollspy({
    target: "#nav-main",
    offset: navbarHeight + 11
  });

  $('[data-spy="scroll"]').on("activate.bs.scrollspy", function() {
    $("nav-link").addClass("active");
  });
}
