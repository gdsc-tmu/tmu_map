var map;
function initMap() {
  var latlng = { lat: 35.61712271168633, lng: 139.3780743025393 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: latlng,
    zoom: 18,
  });
  const ctaLayer = new google.maps.KmlLayer({
    url: "file:///Users/yujirokisu/Desktop/three-stoied_building.kml",
 
  });
}