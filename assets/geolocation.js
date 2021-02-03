var submitEl = document.querySelector("#useMyLoc");

function showPosition() {
  if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showMap, showError);
  } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
  }
}

function showMap(position) {

  lat = position.coords.latitude;
  long = position.coords.longitude;
  var latlong = new google.maps.LatLng(lat, long);
  
  var myOptions = {
      center: latlong,
      zoom: 16,
      mapTypeControl: true,
      navigationControlOptions: {
          style:google.maps.NavigationControlStyle.SMALL
      }
      
  }
  
  var map = new google.maps.Map(document.getElementById("map-results"), myOptions);
  var marker = new google.maps.Marker({ position:latlong, map:map, title:"You are here!" });
  
}

function showError(error) {
  if(error.code == 1) {
      result.innerHTML = "You've decided not to share your position, but it's OK. We won't ask you again.";
  } else if(error.code == 2) {
      result.innerHTML = "The network is down or the positioning service can't be reached.";
  } else if(error.code == 3) {
      result.innerHTML = "The attempt timed out before it could get the location data.";
  } else {
      result.innerHTML = "Geolocation failed due to unknown error.";
  }
}



function showmap(position) {
  position.preventDefault()
}
submitEl.addEventListener("click", showPosition);