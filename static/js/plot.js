var selector = d3.select("#selDataset");

d3.json("/static/js/sitings2.json").then((data) => {
 
let states = Object.keys(data)
    states.forEach((name) => {
      selector
        .append("option")
        .text(name)
        .property("value", name);
    });
    
    buildCharts(states);
});

function optionChanged(id){

    buildCharts(id);

};
function buildCharts(id) {
    d3.json("/static/js/sitings.json").then((data) => {
      
      var trace1 = {
        
        y: Object.values(data.bigfoot_sitings),
        x: Object.keys(data.bigfoot_sitings),
        name: 'bigfoot',
        type: 'bar'
      };
      var trace2 =
      {
        y: Object.values(data.ufo_sitings),
        x: Object.keys(data.ufo_sitings),
        name: "ufos",
        type: 'bar'
      };
    var trace3 = 
      {
        y: Object.values(data.reported_hauntings),
        x: Object.keys(data.reported_hauntings),
        name: "hauntings",
        type: 'bar'
      };

    var barLayout = {
    barmode: 'group'
    };
    var xt = [trace1, trace2, trace3]
    Plotly.newPlot("bar",xt, barLayout);
})};