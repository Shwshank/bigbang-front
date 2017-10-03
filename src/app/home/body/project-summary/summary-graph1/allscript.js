google.charts.load('current', {
  'packages':['geochart'],
  // Note: you will need to get a mapsApiKey for your project.
  // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
  'mapsApiKey': 'AIzaSyDa8Ry6TkPshSp2U6yZF37vUyvISXfDqp4'
});
google.charts.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {
  var arrayData = [
    ['City',   'Population'],
    ['New Delhi',      2761477],
    ['Kolkata',      2761477],
    ['Gujrat',      27617],
    ['Asam',      247],
    ['Mumbai',      274077],
    ['Goa',      274707],
  ];

  console.log(arrayData);

  var data = google.visualization.arrayToDataTable(arrayData);

  var options = {
        region: 'IN',
        displayMode: 'markers',
        colorAxis: {colors: ['pink', 'blue']}
      };

  var chart = new google.visualization.GeoChart(document.getElementById('chart1'));
  chart.draw(data, options);
  }
