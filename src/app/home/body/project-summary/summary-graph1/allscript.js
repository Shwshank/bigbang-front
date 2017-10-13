
  google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {
  var data = google.visualization.arrayToDataTable([
    ['City',   'Population', 'Area'],
    ['delhi',      12,    1285.31],
    ['goa',      2,    285.31],

  ]);

  var options = {
    region: 'IN',
    domain: 'IN',
    displayMode: 'markers',
    colorAxis: {colors: ['#3f51b5', '#919fec']},
    sizeAxis:  {minValue: 10,  maxSize: 30},
    backgroundColor: {fill:'yellow', stroke:'red', strokeWidth:4, },
    datalessRegionColor: '#f8bbd0',
    defaultColor: 'yellow',
    magnifyingGlass: {enable: true, zoomFactor: 7.5},
    enableRegionInteractivity: 'true',
    resolution: 'provinces',

  };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
