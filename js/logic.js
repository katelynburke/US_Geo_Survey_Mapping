// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the queryUrl
d3.json(queryUrl, function(data) {
    // Once we get a response, send the data.features object to the createFeatures function
    createFeatures(data.features);
  });


function createFeatures(earthquakeData) {

  // Define a function we want to run once for each feature in the features array
  // Give each feature a popup describing the place and time of the earthquake
  // Create a GeoJSON layer containing the features array on the earthquakeData object
  // Run the onEachFeature function once for each piece of data in the array

    function onEachFeature(feature, layer) {
      layer.bindPopup("<h3>" + feature.properties.place +
       "</h3><hr><p>" + new Date(feature.properties.time) +
      "</h3><hr><p>Magnitude: " + feature.properties.mag + "</p>");
  }

    var earthquakes = L.geoJSON(earthquakeData, {
      onEachFeature: onEachFeature,
      pointToLayer: function (feature, latlng) {
      return new L.circle(latlng,
      {radius: getRadius(feature.properties.mag),
      fillColor: getColor(feature.properties.mag),
      fillOpacity: .6,
      color: "#000",
      stroke: true,
      weight: .8
      })
    }
  });
    // Sending our earthquakes layer to the createMap function
    createMap(earthquakes);
}

function createMap(earthquakes) {

    // Define satellite and darkmap layers
    var satellite = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia21idXJrZTUiLCJhIjoiY2p3cjEzYTRwMWVleTQ5bnNwenJvNm8ydCJ9.tytCkU-09HfY1Yo3AzYs5Q")
      // accessToken= API_KEY;

    var outdoors = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia21idXJrZTUiLCJhIjoiY2p3cjEzYTRwMWVleTQ5bnNwenJvNm8ydCJ9.tytCkU-09HfY1Yo3AzYs5Q")
        // accessToken= API_KEY;
  
    var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?" +
    "access_token=pk.eyJ1Ijoia21idXJrZTUiLCJhIjoiY2p3cjEzYTRwMWVleTQ5bnNwenJvNm8ydCJ9.tytCkU-09HfY1Yo3AzYs5Q")
      // accessToken= API_KEY;
  
    // Define a baseMaps object to hold our base layers
    var baseMaps = {
      "Satellite": satellite,
      "Outdoors": outdoors,
      "Light Map": lightmap
    };

// Create overlay object to hold our overlay layer
var overlayMaps = {
    "Earthquakes": earthquakes,
};

// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [outdoors, earthquakes, lightmap]
});
  


//   L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "mapbox.light",
//     accessToken: API_KEY
//   }).addTo(myMap);

}


function getColor(d){
  return d > 5 ? "#a54500":
  d  > 4 ? "#cc5500":
  d > 3 ? "#ff6f08":
  d > 2 ? "#ff9143":
  d > 1 ? "#ffb37e":
           "#ffcca5";
}

function getRadius(value){
  return value*25000
}