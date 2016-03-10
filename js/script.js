$(document).ready(function(){

// Карта

  var points = [
  // Найти координаты: http://www.mapcoordinates.net/ru
  {lat: 59.932, lng: 30.348}
];

$.ajax({
  url: 'https://maps.googleapis.com/maps/api/js',
    dataType: 'jsonp',
  jsonp: 'callback',
  data: {
    // АХТУНГ! Это МОЙ ключ! Заведите свой!
    key: 'AIzaSyDjGAiz42P2243i_aoNCu4Pf0vU_xDWcZk',
    signed_in: true
  },
  success: mapInit
});

function mapInit() {
  var map = new google.maps.Map($('#mymap').get(0), {
    center: {lat: 59.932, lng: 30.348},
    zoom: 12,
    // disableDefaultUI: true,
    scrollwheel: false,
  });

  var markers = [];

  points.forEach(function (position, i) {
    markers.push(new google.maps.Marker({
      position: position,
      map: map,
    }));
  });
};

var toggler = document.getElementById('toggler');
toggler.onclick = function(e){
  e.preventDefault();
  toggler.classList.toggle('toggler--close');
  document.getElementById('nav').classList.toggle('nav--visible');
};

    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true
    });

});