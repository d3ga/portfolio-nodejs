// Main navigation (currently supports max. 1 sub-level)
exports.siteName = `Kostas Degaitas`;

// Navigation

exports.navigation = [
  {
    name: "Home",
    href: "#home"
  },
  {
    name: "About",
    href: "#about"
  },
  {
    name: "Skills",
    href: "#skills"
  },
  {
    name: "Projects",
    href: "#projects"
  },
  {
    name: "Contact",
    href: "#contact"
  },
  {
    name: "Links",
    href: "#links"
  }
];

// Skills

exports.skills = [
  {
    technology: "HTML | SCSS | Bootstrap",
    percent: "93"
  },
  {
    technology: "JavaScript (ES6)",
    percent: "70"
  },
  {
    technology: "React.js | Redux",
    percent: "45"
  },
  {
    technology: "Node.js | Express | MongoDB",
    percent: "60"
  },
  {
    technology: "Adobe Illustrator | Adobe Photoshop",
    percent: "96"
  }
];

// Projects

exports.projectThumbnails = [
  {
    title: "Marvel Heroes Search",
    href: "https://d3ga.github.io/marvel-api/",
    src: "/images/thumbnail_marvel_compressed.jpg",
    alt: "Thumbnail of project Marvel Heroes Search",
    description:
      "A minimal design search engine for Marvel superheroes. You can see a picture of every character a small description and the comics that they have appeared using data provided by the Marvel API."
  },
  {
    title: "IP Geolocation",
    href: "https://d3ga.github.io/user-geolocation-info/",
    src: "/images/thumbnail_google_maps_compressed.png",
    alt: "Thumbnail of project User Geolocation",
    description:
      "Estimates the user's IP geolocation. Displays the country, city, region, provider, and postal code using data from the ipinfo.io API and displays a marker on the map using the Google Maps API"
  },
  {
    title: "Beers Search",
    href: "https://d3ga.github.io/beer-search/",
    src: "/images/thumbnail_punkapi_compressed.jpg",
    alt: "Thumbnail of project Beers Search",
    description:
      "You can search for a large variety of beers and read a small description about their characteristics and their origin. Data provided by the Punk API"
  },
  {
    title: "XKCD Comics",
    href: "https://codepen.io/dega_k/pen/XzGNPX",
    src: "/images/thumbnail_comics_compressed.jpg",
    alt: "Thumbnail of project XKCD Comics",
    description:
      "Need a small break with some developer comics? Then have a go! Browse a random comic or get a comic by their ID. Using data provided by the XKCD Comics API"
  },
  {
    title: "React ToDo",
    href: "https://react-todo-app.kostasdegaitas.de/",
    src: "/images/thumbnail_react_todo_compressed.jpg",
    alt: "Thumbnail of project React ToDo",
    description:
      "This is a todo list build with React.js. User can add, edit & delete todo items. The app uses the browser's local storage to save the current items"
  }
];

// Footer

exports.socialIcons = [
  {
    faIcon: "fa-github fa-2x",
    href: "https://github.com/d3ga"
  },
  {
    faIcon: "fa-linkedin-square fa-2x",
    href: "https://www.linkedin.com/in/kostasdega/"
  },
  {
    faIcon: "fa-xing fa-2x",
    href: "https://www.xing.com/profile/Kostas_Degaitas/cv"
  },
  {
    faIcon: "fa-behance fa-2x",
    href: "https://www.behance.net/kostasdegaitas"
  },
  {
    faIcon: "fa-eye fa-2x",
    href: "http://cargocollective.com/kostasdegaitas"
  }
];
