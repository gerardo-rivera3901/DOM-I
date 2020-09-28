const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Header
let nav = document.querySelector('nav')
nav.children[0].textContent = siteContent["nav"]["nav-item-1"]
nav.children[1].textContent = siteContent["nav"]["nav-item-2"]
nav.children[2].textContent = siteContent["nav"]["nav-item-3"]
nav.children[3].textContent = siteContent["nav"]["nav-item-4"]
nav.children[4].textContent = siteContent["nav"]["nav-item-5"]
nav.children[5].textContent = siteContent["nav"]["nav-item-6"]

//Main Content
let h1 = document.querySelector("h1")
let br = document.createElement("br")
let br2 = document.createElement("br")
let h1text1 = document.createTextNode("DOM")
let h1text2 = document.createTextNode("Is")
let h1text3 = document.createTextNode("Awesome")
h1.appendChild(h1text1)
h1.appendChild(br)
h1.appendChild(h1text2)
h1.appendChild(br2)
h1.appendChild(h1text3)

const mainBut = document.querySelector('button')
mainBut.textContent = siteContent["cta"]["button"]

const mainImg = document.querySelector('#cta-img')
mainImg.setAttribute('src', siteContent["cta"]["img-src"])

//Middle Content
const midImg = document.querySelector('#middle-img')
midImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const featuresTitle = document.querySelector('.text-content:nth-of-type(1)')
featuresTitle.children[0].textContent = siteContent["main-content"]["features-h4"]

const featuresTxt = document.querySelector('.text-content:nth-of-type(1)')
featuresTxt.children[1].textContent = siteContent["main-content"]["features-content"]

const aboutTitle = document.querySelector('.text-content:nth-of-type(2)')
aboutTitle.children[0].textContent = siteContent["main-content"]["about-h4"]

const aboutTxt = document.querySelector('.text-content:nth-of-type(2)')
aboutTxt.children[1].textContent = siteContent["main-content"]["about-content"]

//Under-Mid-Picture Content
const servicesTitle = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
servicesTitle.children[0].textContent = siteContent["main-content"]["services-h4"]

const servicesTxt = document.querySelector('.bottom-content .text-content:nth-of-type(1)')
servicesTxt.children[1].textContent = siteContent["main-content"]["services-content"]

const productTitle = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
productTitle.children[0].textContent = siteContent["main-content"]["product-h4"]

const productTxt = document.querySelector('.bottom-content .text-content:nth-of-type(2)')
productTxt.children[1].textContent = siteContent["main-content"]["product-content"]

const visionTitle = document.querySelector('.bottom-content .text-content:nth-of-type(3)')
visionTitle.children[0].textContent = siteContent["main-content"]["vision-h4"]

const visionTxt = document.querySelector('.bottom-content .text-content:nth-of-type(3)')
visionTxt.children[1].textContent = siteContent["main-content"]["vision-content"]

//Conact
let contactText1 = document.createTextNode('123 Way 456 Street')
let contactText2 = document.createTextNode('Somewhere, USA')
let br3 = document.createElement("br")

const contact = document.querySelector('.contact')
contact.children[0].textContent = siteContent["contact"]["contact-h4"]
contact.children[1].appendChild(contactText1)
contact.children[1].appendChild(br3)
contact.children[1].appendChild(contactText2)
contact.children[2].textContent = siteContent["contact"]["phone"]
contact.children[3].textContent = siteContent["contact"]["email"]

//Footer
const footer = document.querySelector('footer')
footer.children[0].textContent = siteContent["footer"]["copyright"]
