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

//navbar and anchors

//selectors

const navBarContainer = document.querySelector('nav')
const navBar = navBarContainer.children

//changes

navBar[0].textContent = 'Services';
navBar[0].style.color = 'green';
navBar[1].textContent = 'Products';
navBar[1].style.color = 'green';
navBar[2].textContent = 'Vision';
navBar[2].style.color = 'green';
navBar[3].textContent = 'Features';
navBar[3].style.color = 'green';
navBar[4].textContent = 'About';
navBar[4].style.color = 'green';
navBar[5].textContent = 'Contact';
navBar[5].style.color = 'green';

//append and prepend children

const newAnchor = document.createElement('a')

const nav = document.querySelector('nav')

nav.appendChild(newAnchor)
const lastNav = nav.lastElementChild
lastNav.textContent = 'Socials';
lastNav.style.color = 'green';

// nav.prependChild(newAnchor)
// const firstNav = nav.firstElementChild
// firstNav.textContent = 'Projects';
// firstNav.style.color = 'green';


//h1 w/ button and circle img

const h1Dom = document.querySelector('.cta-text')
const h1DomText = h1Dom.children
const mainButton = h1Dom.children

//changes

h1DomText[0].textContent = 'DOM IS AWESOME';
mainButton[1].textContent = 'Get Started';
document.getElementById('cta-img').src = 'img/header-img.png';

//top content, 2 paragraphs

const topContent = document.querySelector('.top-content')

const topTitle1 = topContent.firstElementChild.firstElementChild
const topPara1 = topContent.firstElementChild.lastElementChild

const topTitle2 = topContent.lastElementChild.firstElementChild
const topPara2 = topContent.lastElementChild.lastElementChild

//changes

topTitle1.textContent = 'FEATURES';
topPara1.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdurm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

topTitle2.textContent = 'ABOUT';
topPara2.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdurm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//middle img

document.getElementById('middle-img').src = 'img/mid-page-accent.jpg'

//bottom content, 3 paragraphs

const bottomContent = document.querySelector('.bottom-content')

const bottomTitle1 = bottomContent.firstElementChild.firstElementChild
const bottomPara1 = bottomContent.firstElementChild.lastElementChild

const bottomContent2 = bottomContent.firstElementChild
const bottomTitle2 = bottomContent2.nextElementSibling.firstElementChild
const bottomPara2 = bottomContent2.nextElementSibling.lastElementChild


const bottomTitle3 = bottomContent.lastElementChild.firstElementChild
const bottomPara3 = bottomContent.lastElementChild.lastElementChild

//changes

bottomTitle1.textContent = 'SERVICES'
bottomPara1.textContent ='Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdurm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomTitle2.textContent = 'PRODUCT'
bottomPara2.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdurm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

bottomTitle3.textContent = 'VISION'
bottomPara3.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdurm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//Contact

const contactMain = document.querySelector('.contact')

const contactHead = contactMain.querySelector('h4')
contactHead.textContent = "Contact"

const contactPara1 = contactHead.nextElementSibling
contactPara1.innerHTML =  '123 way 456 Street <br/> Somewhere USA'

const contactPara2 = contactPara1.nextElementSibling
contactPara2.textContent = "1 (888) 888-8888"

const contactPara3 = contactPara2.nextElementSibling
contactPara3.textContent = "sales@greatidea.io"

//footer

const footerContainer = document.querySelector('footer')
const footerPara = footerContainer.firstElementChild

//changes

footerPara.textContent = 'Copyright Great Idea! 2018'
