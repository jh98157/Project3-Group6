// Create the base layers.
var street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})

var topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

// Create a baseMaps object.
var baseMaps = {
  "Street Map": street,
  "Topographic Map": topo
};

var bigfootMarkerOptions = {
  radius: 20000,
  fillColor: "brown",
  color: "brown",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var ufoMarkerOptions = {
  radius: 20000,
  fillColor: "green",
  color: "green",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};
var hauntedMarkerOptions = {
  radius: 20000,
  fillColor: "white",
  color: "white",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.6
};

var bigfootLayer = new L.LayerGroup();

d3.json("/api/bigfoot.json").then(function(data) {
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circle(latlng, bigfootMarkerOptions);
  },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h1> Summary </h1> <h2> " + feature.properties.title);
      }
  }).addTo(bigfootLayer)});

var ufoLayer = new L.LayerGroup(); 
d3.json("/api/UFO.json").then(function(data) {
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circle(latlng, ufoMarkerOptions);
  },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h1> Summary: </h1> <h2> " + feature.properties.summary);
      }
  }).addTo(ufoLayer)})

var houseLayer = new L.LayerGroup(); 
d3.json("/api/haunted.json").then(function(data) {
  L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circle(latlng, hauntedMarkerOptions);
  },
    onEachFeature: function(feature, layer) {
      layer.bindPopup("<h1> Summary: </h1> <h2> " + feature.properties.description);
      }
  }).addTo(houseLayer)})
//   // Create an overlay object to hold our overlay.
var overlayMaps = {
  "Bigfoot": bigfootLayer,
  "UFO": ufoLayer,
  "Haunted Houses": houseLayer,
}
// Create our map, giving it the streetmap and earthquakes layers to display on load.
var myMap = L.map("map", {
  center: [
    37.09, -95.71
  ],
  zoom: 5,
  preferCanvas: true,
  layers: [street]
});

// Create a layer control.
// Pass it our baseMaps and overlayMaps.
// Add the layer control to the map.
L.control.layers(baseMaps, overlayMaps, bigfootLayer, ufoLayer,{
  collapsed: false
}).addTo(myMap);