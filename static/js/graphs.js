// line chart 
let trace1 = {
  x: [1940,1950,1960,1970, 1980, 1990, 2000, 2010],
  y: [103,440,1355,2403,2077,8242,36303,44047],
  type: 'line',
  name:'UFO',
  line:{
    color:'lime',
    width:2
  },
  marker: {
    color: 'lime',
    size: 20
  }
};

let trace2 = {
  x: [1950,1960,1970, 1980, 1990, 2000, 2010],
  y: [41,102,437,442,562,1675,878],
  type: 'line',
  name:'Bigfoot',
  line:{
    color:'#6AF9DD',
    width:1
  },
  marker: {
    color: '#6AF9DD',
    size: 20
  }
};

let data = [trace1,trace2];

let layout = {
    title: `UFO and Bigfoot reports by decade`,
    plot_bgcolor:"black",
    paper_bgcolor:"black",
    font: {
      family: 'Courier New, monospace',
      size: 18,
      color: 'white'
    },
    xaxis: {
      tickcolor: 'white',
      gridcolor: "gray",
      gridwidth: 1,
    },
    yaxis: {
      tickcolor: 'white',
      gridcolor: "gray",
      gridwidth: 1
    }
  };

  Plotly.newPlot('myDiv', data,layout);


  
// donut chart 
var circledata = [{
  values: [103,440,1355,2403,2077,8242,36303,44047],
  labels: [1940,1950,1960,1970, 1980, 1990, 2000, 2010],
  domain: {column: 0},
  name: 'UFO Reports',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie',
  // marker: {
  //         colors: ["3DF8E4","F66666","8016FF","#CD5C5C","#FFBF00","#6495ED","#DE3163","#CACFD2"]
  //         },
},{
  values: [41,102,437,442,562,1675,878],
  labels: [1950,1960,1970, 1980, 1990, 2000, 2010],
  domain: {column: 1},
  name: 'Bigfoot',
  hoverinfo: 'label+percent+name',
  hole: .4,
  type: 'pie'
}];

let layout2 = {
    annotations: [
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'UFO',
        x: 0.22,
        y: 0.5
      },
      {
        font: {
          size: 20
        },
        showarrow: false,
        text: 'Bigfoot',
        x: 0.79,
        y: 0.5
      }
    ],
    // height: 800,
    // width: 1000,
    showlegend: true,
    grid: {rows: 1, columns: 2},
    plot_bgcolor:"black",
    paper_bgcolor:"black",
    font: {
      family: 'Courier New, monospace',
      size: 18,
      color: 'white'
    },
  };

  Plotly.newPlot('myDiv2', circledata,layout2);



// Donut Shapes
var circledata2 = [{
  values: [20256,9818,9358,7788,6888,6658,6483,5841,4332,3071],
  labels: ["Light","Circle","Triangle","Fireball","Unknown","Other","Sphere","Disk","Oval","Formation"],
  name: 'UFO Shape',
  hoverinfo: 'label+percent+name',
  textinfo:"percent",
  hole: .4,
  type: 'pie',
  marker: {
        colors: ["#C0392B","#C39BD3","#5DADE2","#73C6B6","#58D68D","#F4D03F","#D68910","#D7DBDD","#2874A6","#76448A"]
      },
}];

let layout3 = {
    title:"Top 10 UFO Shapes",
        // height: 800,
        // width: 1000,
        showlegend: true,
        plot_bgcolor:"black",
        paper_bgcolor:"black",
        font: {
          family: 'Courier New, monospace',
          size: 18,
          color: 'white'
        },
  };

Plotly.newPlot('myDiv3', circledata2,layout3);




// Donut Classification
var circledata3 = [{
  values: [2093,2138,19],
  labels: ["Class A","Class B","Class C"],
  name: 'Bigfoot Classifications',
  hoverinfo: 'label+percent+name',
  textinfo:"percent+value",
  hole: .4,
  type: 'pie',
  marker: {
    colors: ["58BCD5","F66666","8016FF"]
  },
}];

let layout4 = {
    title:"Bigfoot Classifications",
    // height: 800,
    // width: 1000,
    showlegend: true,
    plot_bgcolor:"black",
    paper_bgcolor:"black",
    font: {
      family: 'Courier New, monospace',
      size: 18,
      color: 'white'
    },
  };
 
  Plotly.newPlot('myDiv4', circledata3,layout4);


