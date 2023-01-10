// Create an array of each state's numbers
let alabama = Object.values(data.alabama);
let alaska = Object.values(data.alaska);
let arizona = Object.values(data.arizona);
let arkansas = Object.values(data.arkansas);
let california = Object.values(data.california);
let colorado = Object.values(data.colorado);
let connecticut = Object.values(data.connecticut);
let delaware = Object.values(data.delaware);
let florida = Object.values(data.florida);
let georgia = Object.values(data.georgia);
let hawaii = Object.values(data.hawaii);
let idaho = Object.values(data.idaho);
let illinois = Object.values(data.illinois);
let indiana = Object.values(data.indiana);
let iowa = Object.values(data.iowa);
let kansas = Object.values(data.kansas);
let kentucky = Object.values(data.kentucky);
let louisiana = Object.values(data.louisiana);
let maine = Object.values(data.maine);
let maryland = Object.values(data.maryland);
let massachusetts = Object.values(data.massachusetts);
let michigan = Object.values(data.michigan);
let minnesota = Object.values(data.minnesota);
let mississippi = Object.values(data.mississippi);
let missouri = Object.values(data.missouri);
let montana = Object.values(data.montana);
let nebraska = Object.values(data.nebraska);
let nevada = Object.values(data.nevada);
let newHampshire = Object.values(data.newHampshire);
let newJersey = Object.values(data.newJersey);
let newMexico = Object.values(data.newMexico);
let newYork = Object.values(data.newYork);
let northCarolina = Object.values(data.northCarolina);
let northDakota = Object.values(data.northDakota);
let ohio = Object.values(data.ohio);
let oklahoma = Object.values(data.oklahoma);
let oregon = Object.values(data.oregon);
let pennsylvania = Object.values(data.pennsylvania);
let rhodeIsland = Object.values(data.rhodeIsland);
let southCarolina = Object.values(data.southCarolina);
let southDakota = Object.values(data.southDakota);
let tennessee = Object.values(data.tennessee);
let texas = Object.values(data.texas);
let utah = Object.values(data.utah);
let vermont = Object.values(data.vermont);
let virginia = Object.values(data.viginia);
let washington = Object.values(data.washington);
let westVirginia = Object.values(data.westVirginia);
let wisconsin = Object.values(data.wisconsin);
let wyoming = Object.values(data.wyoming);

// Create an array of category labels
let labels = Object.keys(data.alabama);

// Display the default plot
function init() {
  let data = [{
    values: alabama,
    labels: labels,
    type: "bar"
  }];

  let layout = {
    height: 600,
    width: 800
  };

  Plotly.newPlot("bar", data, layout);
}

// On change to the DOM, call getData()
d3.selectAll("#selDataset").on("change", getData);

// Function called by DOM changes
function getData() {
  let dropdownMenu = d3.select("#selDataset");
  // Assign the value of the dropdown menu option to a letiable
  let dataset = dropdownMenu.property("value");
  // Initialize an empty array for the country's data
  let data = [];

  if (dataset == 'alabama') {
      data = alabama;
  }
  else if (dataset == 'alaska') {
      data = alaska;
  }
  else if (dataset == 'arizona') {
      data = arizona;
  }
  else if (dataset == 'arkansas') {
    data = arkansas;
  }
  else if (dataset == 'california') {
      data = california;
  }
  else if (dataset == 'colorado') {
    data = colorado;
  }
// Call function to update the chart
  updatePlotly(data);
}

// Update the restyled plot's values
function updatePlotly(newdata) {
  Plotly.restyle("bar", "values", [newdata]);
}

init();
