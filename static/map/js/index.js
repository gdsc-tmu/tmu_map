let map;
let markers;

function initMap() {
  var latlng = { lat: 35.61712271168633, lng: 139.3780743025393 };
  map = new google.maps.Map(document.getElementById("map"), {
    center: latlng,
    zoom: 18,
  });


// Function to fetch KML files and display placemarkers
function fetchKmlFile (kmlUrl, buttonElement) {
  // Fetch the KML file
  fetch(kmlUrl)
    .then((response) => response.text())
    .then((kmlString) => {
      // Parse the KML string into a KML document object
      const parser = new DOMParser();
      const kmlDocument = parser.parseFromString(kmlString, "application/xml");

      // Get all placemarks in the KML document
      const placemarks = kmlDocument.getElementsByTagName("Placemark");

      // Create a list element to hold the placemark buttons
      const listElement = document.createElement("ul");

      // Loop through each placemark and create a button for it
      for (let i = 0; i < placemarks.length; i++) {
        const placemark = placemarks[i];
        const name = placemark.getElementsByTagName("name")[0].textContent;

        const buttonElement = document.createElement("button");
        buttonElement.textContent = name;
        buttonElement.addEventListener("click", () => {
          // Show the placemark on the map when the button is clicked
          const geometryElement = placemark.getElementsByTagName("Point")[0];
          const coordinates = geometryElement.getElementsByTagName("coordinates")[0].textContent.split(",");
          const longitude = parseFloat(coordinates[0]);
          const latitude = parseFloat(coordinates[1]);
          const position = { lat: latitude, lng: longitude };
          const name = placemark.getElementsByTagName("name")[0].textContent;

          // Set the map center and zoom to the placemark
          map.setCenter(position);
          map.setZoom(20);

          const markers = new google.maps.Marker({
            position: position,
            map: map,
            title: name,
            label: {
              text: name,
              color: "black",
              fontSize: "15px"
            },
          });

        });

        const listItemElement = document.createElement("li");
        listItemElement.appendChild(buttonElement);
        listElement.appendChild(listItemElement);
      }

      // Add the list to the page
      const placemarkListElement = document.getElementById("placemark-list");
      let listShownButton = null;
      if (buttonElement === listShownButton) {
        placemarkListElement.innerHTML = "";
        listShownButton = null;
      }
      else {
        placemarkListElement.innerHTML = "";
        placemarkListElement.appendChild(listElement);
        listShownButton = buttonElement;
      }
    })
    .catch((error) => {
      console.error("Error fetching KML file:", error);
    });
  };


// Attach click listeners to all KML file buttons
const kmlButtons = document.querySelectorAll(".kml-button");
kmlButtons.forEach(button => {
  button.addEventListener("click", () => {
    const kmlUrl = button.dataset.url;
    fetchKmlFile(kmlUrl);
  });

});


// Define the loadPlacemarks function
function loadPlacemarks(kmlUrlAll) {

  // Fetch the KML file
  fetch(kmlUrlAll)
    .then((response) => response.text())
    .then((kmlStrings) => {

  // Parse the KML string into a KML document object
  const parsers = new DOMParser();
  const kmlDocuments = parsers.parseFromString(kmlStrings, "application/xml");

  // Get all placemarks in the KML document
  const placemarks = kmlDocuments.getElementsByTagName("Placemark");

    // Loop through the placemarks and add them to the map
    for (let i = 0; i < placemarks.length; i++) {
      const placemark = placemarks[i];

        // Show the placemark on the map when the button is clicked
        const geometryElement = placemark.getElementsByTagName("Point")[0];
        const coordinates = geometryElement.getElementsByTagName("coordinates")[0].textContent.split(",");
        const longitude = parseFloat(coordinates[0]);
        const latitude = parseFloat(coordinates[1]);
        const position = { lat: latitude, lng: longitude };
        const name = placemark.getElementsByTagName("name")[0].textContent;
  
        // Set the map center and zoom to the placemark
        map.setCenter(position);
        map.setZoom(19);
  
        const markers = new google.maps.Marker({
          position: position,
          map: map,
          title: name,
          label: {
            text: name,
            color: "black",
            fontSize: "15px",
          },
        });
    }
  });
}


// Attach click listeners to all KML file buttons
const kmlButtonsAll = document.querySelectorAll(".kml-button-all");
kmlButtonsAll.forEach(button => {
  button.addEventListener("click", () => {
    const kmlUrlAll = button.dataset.url;
    loadPlacemarks(kmlUrlAll);
  });
  
});

}