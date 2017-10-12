  google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {
  var data = google.visualization.arrayToDataTable([
    ['City',   'Population', 'Area'],
    ['delhi',      12,    1285.31],
    ['kolkata',      8,    1000.31],
    ['goa',      10,    1200.31],
    ['gujrat',      19,    2200.31],

  ]);

  var options = {
    region: 'IN',
    displayMode: 'markers',
    colorAxis: {colors: ['#677ae2', '#9065de']}
  };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
