// function init(){
var selector = d3.select("#selDataset");

d3.json('/api/sitings2').then(data => {
console.log(data)
  Object.keys(data).forEach((place) => {
      selector
        .append("option")
        .text(place)
        .property("value", place);
    });

   buildCharts(Object.keys(data)[0]);
   console.log(Object.keys(data)[0]);
})
// };

function optionChanged(id){
    
  buildCharts(id);

};

function buildCharts(id) {
    d3.json("/api/sitings2").then((data) => {
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
          bartype: "group",
          plot_bgcolor:"rgba(0,0,0,0)",
          paper_bgcolor:"rgba(0,0,0,0)",
        }
        var bg = [t1,t2,t3]
        Plotly.newPlot("bar2",bg,Layout);
        });
}