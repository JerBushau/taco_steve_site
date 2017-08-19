
function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 38.2875009, lng:-85.8175687 },
    zoom: 18,
    disableDefaultUI: true,
    scrollwheel: false
  });
  let marker = new google.maps.Marker({
    position: { lat: 38.287483, lng: -85.817553 },
    map: map,
    title: 'Taco Steve!',
    icon: {
      url: 'imgs/taco_marker.png'
    }
  });
}

// nav menu
// change this so that the dark-bg is only applied on large devices
// by checking the width of the window > than 750px

const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
const backButton = document.querySelector('.back-button');

const siteWrapper = document.querySelector('.site-wrapper');
const menu = document.querySelector('.steve-menu');
const contact = document.querySelector('.steve-contact');

// dry up
siteWrapper.addEventListener('click', e => {
  let activesSection = document.querySelector('.section-active');

  e.preventDefault()
  if (activesSection && e.target.className === 'site-wrapper dark-bg') {
    activesSection.classList.remove('section-active');
    backButton.classList.remove('back-button-visible');
    siteWrapper.classList.remove('dark-bg');
  }
  if (e.target === backButton) backButtonHandler(activesSection);
  if (e.target === menuButton) menuButtonHandler();
  if (e.target === contactButton) contactButtonHandler();
});

function backButtonHandler(activesSection) {
  activesSection.classList.toggle('section-active');
  backButton.classList.toggle('back-button-visible');
  siteWrapper.classList.remove('dark-bg');
};

function menuButtonHandler() {
  menu.classList.add('section-active');
  backButton.classList.add('back-button-visible');
  if (window.innerWidth > 1100) siteWrapper.classList.add('dark-bg');
};

function contactButtonHandler() {
  contact.classList.add('section-active');
  backButton.classList.add('back-button-visible');
  if (window.innerWidth > 1100) siteWrapper.classList.add('dark-bg');
};

