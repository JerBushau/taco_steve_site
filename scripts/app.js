
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

const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');
const backButton = document.querySelector('.back-button');

const menu = document.querySelector('.steve-menu');
const contact = document.querySelector('.steve-location');


backButton.addEventListener('click', e => {
  document.querySelector('.active').classList.toggle('active');
  backButton.classList.toggle('visible');
});

menuButton.addEventListener('click', e => {
  menu.classList.add('active');
  backButton.classList.add('visible');
});

contactButton.addEventListener('click', e => {
  contact.classList.add('active');
  backButton.classList.add('visible');
});

