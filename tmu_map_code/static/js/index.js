var map;
function initMap() {
  var latlng = { lat: 35.61712271168633, lng: 139.3780743025393 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: latlng,
    zoom: 18,
  });

    // Create a new KML layer instance
    const kmlLayer = new google.maps.KmlLayer({
      url: "https://kisu-yuyu.github.io/Warehouse/minamiosawa_bldg1_AV.kml",
      map: map,
    });
  
    // Listen for KML layer events
    google.maps.event.addListener(kmlLayer, "click", (event) => {
      console.log("Clicked on KML layer!", event);
    });

}