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

const navBar = document.getElementsByTagName('nav')
const navAnchors = navBar.getElementsByTagName('a')

//h1 w/ button and circle img

const h1Dom = document.getElementsByClassName('cta-text')[0]
const mainButton = document.getElementsByClassName('cta-text')[1]
const circleImg = document.getElementById('cta-img')

//top content, 2 paragraphs

const topPara1Container = document.getElementsByClassName('top-content')[0]
const topTitle1 = topPara1Container[0]
const topPara1 = topPara1Container[1]

const topPara2Container = document.getElementsByClassName('top-content')[1]
const topTitle2 = topPara2Container[0]
const topPara2 = topPara2Container[1]

//middle img

const midImg = document.getElementById('middle-img')

//bottom content, 3 paragraphs

const bottomPara1Container = document.getElementsByClassName('bottom-content')[0]
const bottomTitle1 = bottomPara1Container[0]
const bottomPara1 = bottomPara1Container[1]

const bottomPara2Container = document.getElementsByClassName('bottom-content')[1]
const bottomTitle2 = bottomPara2Container[0]
const bottomPara2 = bottomPara2Container[1]

const bottomPara3Container = document.getElementsByClassName('bottom-content')[2]
const bottomTitle3 = bottomPara3Container[0]
const bottomPara3 = bottomPara3Container[1]

//footer

const footerContainer = document.getElementsByTagName('footer')
const footerPara = footerContainer[0]