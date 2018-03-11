// Main navigation (currently supports max. 1 sub-level)
exports.siteName = `Dega`

// Navigation

exports.navigation = [
    {
        name: 'Home', 
        href: '#'
    },
    {
        name: 'About', 
        href: '#about'
    },
    {
        name: 'Skills',
        href: '#skills'
    },
    {
        name: 'Projects', 
        href: '#projects'
    },
    {
        name: 'Contact',
        href: '#contact'
    }
]

// Footer

exports.socialIcons = [
    {
        faIcon: 'fa-github fa-2x',
        href: 'https://github.com/d3ga'
    },
    {
        faIcon: 'fa-linkedin-square fa-2x',
        href: 'https://www.linkedin.com/in/kostasdega/'
    },
    {
        faIcon: 'fa-behance fa-2x',
        href: 'https://www.behance.net/kostasdegaitas'
    },
    
]

// Projects

exports.projectThumbnails = [
    {
        title: 'Marvel Superheroes Search',   
        href: 'https://d3ga.github.io/marvel-api/',
        src: '/images/thumbnail_marvel_compressed.jpg',
        alt: 'Thumbnail of project Marvel Heroes Search',
        description: 'A minimal design search engine for Marvel superheroes. You can see a picture of every character a small description (if available) and the comics that the have appeared using data provided by the Marvel API'
    },
    {
        title: 'Google Maps User Geolocation',   
        href: 'https://codepen.io/dega_k/pen/BJJmqV',
        src: '/images/thumbnail_google_maps_compressed.png',
        alt: 'Thumbnail of project Google Maps User Geolocation',
        description: 'Estimates the users geolocation, ip, country, city, region, provider, and postal code using data from the "ipinfo.io API" and displays a marker on the map with "Google Maps API".'
    }
]