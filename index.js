$( document ).ready(function() {
   getLocation();

   var x = document.getElementById("body");

   function getLocation() {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(showDetails);
     } else {
       x.innerHTML = "Geolocation is not supported by this browser.";
     }
   }

   function showDetails(position) {
     latitude = position.coords.latitude;
     longitude = position.coords.longitude;
     showWeather(latitude, longitude);
     showLocation(latitude, longitude);
   };

  function showWeather(latitude, longitude) {
    $.get('https://api.darksky.net/forecast/34d077993c8618ca4f719f9c268a76ce/' + latitude + ',' + longitude + '?units=si', function(data){
       $('#current-temperature').text(data.currently.temperature);
    });
  }

  function showLocation(latitude, longitude) {
    $.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true', function(data){
       $('#current-location').text(data.results[0].address_components[3].long_name);
    });
  }

});
