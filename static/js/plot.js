// function init(){
var selector = d3.select("#selDataset");

d3.json('/api/sitings2.json').then(data => {
console.log(data)
  Object.keys(data).forEach((place) => {
      selector
        .append("option")
        .text(place)
        .property("value", place);
    });

   buildCharts(Object.keys(data)[0]);
  //  console.log(Object.keys(data)[0]);
})
// };

function optionChanged(id){
    
  buildCharts(id);

};

function buildCharts(id) {
    d3.json("/api/sitings2.json").then((data) => {
      let stateData = data[id]
      // let resultArray = data.filter(stateObj => stateObj.id == id);
      // let results = resultArray
      console.log(stateData)
      console.log()
      var trace1 = {
        
        y: Object.values(stateData),
        x: Object.keys(stateData),
        name: 'bigfoot',
        type: 'bar'
      };

    var barLayout = {
      xaxis: {
      title: 'Type of Sitings'
      },
      yaxis: {range: [0, 14000],
        title: 'Number of Reports'
    }}
    var xt = [trace1]
    Plotly.newPlot("bar",xt,barLayout);
    });
    d3.json("/api/sitings.json").then((data) => {
      console.log(data)
        var t1 = {
          
          y: Object.values(data.bigfoot_sitings),
          x: Object.keys(data.bigfoot_sitings),
          name: 'bigfoot',
          type: 'bar'
        };
          var t2 =
        {
          y: Object.values(data.ufo_sitings),
          x: Object.keys(data.ufo_sitings),
          name: "ufos",
          type: 'bar'
        };
      var t3 = 
        {
          y: Object.values(data.reported_hauntings),
          x: Object.keys(data.reported_hauntings),
          name: "hauntings",
          type: 'bar'
        };
        var Layout = {
          bartype: "group"
        }
        var bg = [t1,t2,t3]
        Plotly.newPlot("bar2",bg,Layout);
        });
}

let lineTitle = `Reports Line Chart`

let Decades = [1940,1950,1960,1970, 1980, 1990, 2000, 2010]

let Reports = [103,440,1355,2403,2077,8242,36303,44047]

let BigDecades = [1950,1960,1970, 1980, 1990, 2000, 2010]

let BigReports = [41,102,437,442,562,1675,878]

let trace1 = {
  x: Decades,
  y: Reports,
  name: 'UFOS',
  type: 'line'
};

let trace2 = {
  x: BigDecades,
  y: BigReports,
  name: 'Bigfoot',
  type: 'line'
};
let trace3 = {
  x: [1990, 1990],
  y: [0,50000],
  name: 'Creation of Military Drone',
  type: 'line'
};
let trace4 = {
  x: [2000, 2000],
  y: [0,50000],
  name: 'FDA Commerical Drone License ',
  type: 'line'
};


let graphs = [trace1,trace2,trace3,trace4];


let layout = {
  title: lineTitle,
  yaxis: {range: [0, 47000]},
}

Plotly.newPlot("line", graphs, layout);

