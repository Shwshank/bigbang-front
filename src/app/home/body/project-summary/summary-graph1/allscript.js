
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
    displayMode: 'markers',
    colorAxis: {colors: ['#3f51b5', '#919fec']}
  };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
