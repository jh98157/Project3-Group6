var selector = d3.select("#selDataset");

d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
    let names = data.names;

    names.forEach((name) => {
      selector
        .append("option")
        .text(name)
        .property("value", name);
    });
    
    buildMetadata(names[0]);
    buildCharts(names[0]);
});

function optionChanged(id){
    buildMetadata(id);
    buildCharts(id);

}

function  buildMetadata(id) {

    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let metadata = data.metadata;
        console.log(metadata)
        let resultArray = metadata.filter(idObj => idObj.id == id);
        let result = resultArray[0];

        let box = d3.select("#sample-metadata");
        
        box.html("");
        Object.entries(result).forEach(([key, value]) => {
            box.append("h6").text(`${key.toUpperCase()}: ${value}`);
          });
    })
}

function buildCharts(id) {
    d3.json("https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json").then((data) => {
        let samples = data.samples;

        let resultArray = samples.filter(idObj => idObj.id == id);
        let result = resultArray[0];

        let metadata = data.metadata;

        let metaArray = metadata.filter(idObj => idObj.id == id);
        let metaResult = metaArray[0];
        let wfreq = metaResult.wfreq;
        let otu_ids = result.otu_ids;
        let otu_labels = result.otu_labels;
        let sample_values = result.sample_values;

        let barData = [
            {
              y: otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse(),
              x: sample_values.slice(0, 10).reverse(),
              text: otu_labels.slice(0, 10).reverse(),
              type: "bar",
              orientation: "h",
            }
          ];
      
          let barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: { t: 30, l: 150 }
          };
      
          Plotly.newPlot("bar", barData, barLayout);
        
          let bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: { t: 0 },
            hovermode: "closest",
            xaxis: { title: "OTU ID" },
            margin: { t: 30}
          };
          
          let bubbleData = [
            {
              x: otu_ids,
              y: sample_values,
              text: otu_labels,
              mode: "markers",
              marker: {
                size: sample_values,
                color: otu_ids,
                colorscale: "Earth"
              }
            }
          ];
      
          Plotly.newPlot("bubble", bubbleData, bubbleLayout);
          let gaugeData = [
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: wfreq,
              title: { text: "Scrubs per week" },
              type: "indicator",
              mode: "gauge+number",
              
              gauge: {
                axis: { range: [null, 10] },
                steps: [
                  { range: [0, 2], color: "lightblue" },
                  { range: [2, 4], color: "blue" },
                  { range: [4, 6], color: "purple" },
                  { range: [6, 8], color: "darkblue" },
                  { range: [8, 10], color: "darkpurple" }
                ],
              }
            }
          ];
          let gaugeLayout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
          Plotly.newPlot('gauge', gaugeData, gaugeLayout);
    })
}