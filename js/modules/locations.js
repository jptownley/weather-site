
function geoLocator(){
  function geoFindMe() {

      const status = document.querySelector('#status');
      const mapLink = document.querySelector('#map-link');
    
      mapLink.href = '';
      mapLink.textContent = '';
    
      function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
    
        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude.toFixed(3)}/${longitude.toFixed(3)}`;
        mapLink.textContent = `Latitude: ${latitude.toFixed(3)} °, Longitude: ${longitude.toFixed(3)} °`;
      };
    
      function error() {
        status.textContent = 'Unable to retrieve your location';
      };
    
      if(!navigator.geolocation) {
        status.textContent = 'Geolocation is not supported by your browser';
      } else {
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
      }
    
  };
document.querySelector('#find-me').addEventListener('click', geoFindMe);
}