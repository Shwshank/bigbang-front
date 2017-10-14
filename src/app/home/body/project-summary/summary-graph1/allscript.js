
  google.charts.load('current', {
    'packages':['geochart'],
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawMarkersMap);

  function drawMarkersMap() {


    var localMapData = [
      ['City',   'Population', 'Area'],
      ['delhi',      12,    1285.31],
      ['goa',      2,    285.31],
    ];

    // console.log(localMapData);

    var mapData = localStorage.getItem('mapData');

    if(mapData == 'undefined') {
      // console.log('undefined');
      mapData = [['City', 'Population'],];
    } else {
      mapData = JSON.parse(mapData);
    }

    // console.log(JSON.parse(mapData));

    var data = google.visualization.arrayToDataTable(mapData);

  var options = {
    region: 'IN',
    domain: 'IN',
    displayMode: 'markers',
    colorAxis: {colors: ['#3f51b5', '#919fec']},
    sizeAxis:  {minValue: 10,  maxSize: 20},
    backgroundColor: {fill:'', stroke:'#c7c7c7', strokeWidth:4, },
    datalessRegionColor: '#eaeeff',
    defaultColor: 'yellow',
    resolution: 'provinces',

  };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
  }
