am4core.useTheme(am4themes_animated);
// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Set up data source
chart.dataSource.url = "https://raw.githubusercontent.com/elle-park/COVID19-Social-Mobility/master/data/longitudinal-total-2020-06-22.csv?token=AIXJGDHE45X5EIF4P2H2X3K67TWDU";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "Dates";

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create Series
function createSeries(field, name, bullet, cover) {

  var series = chart.series.push(new am4charts.LineSeries());
  series.dataFields.valueY = field;
  series.dataFields.categoryX = "Dates";
  series.strokeWidth = 2;
  series.name = name;
  series.tooltipText = "{name}: [bold]{valueY}[/]";
  series.tensionX = 0.7;
  series.showOnInit = true;
  series.hidden = cover;

  var interfaceColors = new am4core.InterfaceColorSet();

  switch(bullet) {
    case "triangle":
      var bullet = series.bullets.push(new am4charts.Bullet());
      bullet.width = 12;
      bullet.height = 12;
      bullet.horizontalCenter = "middle";
      bullet.verticalCenter = "middle";

      var triangle = bullet.createChild(am4core.Triangle);
      triangle.stroke = interfaceColors.getFor("background");
      triangle.strokeWidth = 2;
      triangle.direction = "top";
      triangle.width = 12;
      triangle.height = 12;
      break;
    case "rectangle":
      var bullet = series.bullets.push(new am4charts.Bullet());
      bullet.width = 10;
      bullet.height = 10;
      bullet.horizontalCenter = "middle";
      bullet.verticalCenter = "middle";

      var rectangle = bullet.createChild(am4core.Rectangle);
      rectangle.stroke = interfaceColors.getFor("background");
      rectangle.strokeWidth = 2;
      rectangle.width = 10;
      rectangle.height = 10;
      break;
    default:
      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.stroke = interfaceColors.getFor("background");
      bullet.circle.strokeWidth = 2;
      break;
  }
}

// triangle - USA, regions
// circle - states
// rectangle - cities
createSeries("avg_USA", "USA", "triangle", false);
createSeries("AK", "Alaska", "circle", true);
createSeries("AL", "Alabama", "circle", true);
createSeries("AR", "Arkansas", "circle", true);
createSeries("AZ", "Arizona", "circle", true);
createSeries("CA", "California", "circle", true);
createSeries("CO", "Colorado", "circle", true);
createSeries("CT", "Connecticut", "circle", true);
createSeries("DC", "Washington DC", "circle", true);
createSeries("DE", "Delaware", "circle", true);
createSeries("FL", "Florida", "circle", true);
createSeries("GA", "Georgia", "circle", true);
createSeries("HI", "Hawaii", "circle", true);
createSeries("IA", "Iowa", "circle", true);
createSeries("ID", "Idaho", "circle", true);
createSeries("IL", "Illinois", "circle", true);
createSeries("IN", "Indiana", "circle", true);
createSeries("New York City", "New York City", "rectangle", true);

// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
//chart.cursor.snapToSeries = alaska;
//chart.cursor.xAxis = categoryAxis;

// Add scroll bar - keep at bottom of graph
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;

/*
  Geolocation with HTML5
*/
var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  // get latitude & longitude from HTML5
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

  // initialize Google Maps
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: position.coords.latitude, lng: position.coords.longitude}
  });

  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  // input right latitude & longitude to search box
  var latlng = document.getElementById("latlng");
  latlng.value = position.coords.latitude + "," + position.coords.longitude;

  var input = document.getElementById('latlng').value;
  var latlngStr = input.split(',', 2);
  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        var txtOutput = document.getElementById("txtOutput");
        txtOutput.value = results[0].formatted_address;

      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }

    var str = results[0].formatted_address;
    var res = str.split(", ");
    var stateOutput = document.getElementById("stateOutput");
    stateOutput.value = res[2].substring(0, 2);
    createSeries(res[2].substring(0, 2), res[2].substring(0, 2), "circle", false);
  });
}

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunction2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable2");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

/*
function showPosition(position) {
  // get latitude & longitude from HTML5
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;

  // initialize Google Maps
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 8,
    center: {lat: position.coords.latitude, lng: position.coords.longitude}
  });

  var geocoder = new google.maps.Geocoder;
  var infowindow = new google.maps.InfoWindow;

  document.getElementById('submit').addEventListener('click', function() {
    geocodeLatLng(geocoder, map, infowindow);
  });

  // input right latitude & longitude to search box
  var latlng = document.getElementById("latlng");
  latlng.value = position.coords.latitude + "," + position.coords.longitude

  var input = document.getElementById('latlng').value;
  var latlngStr = input.split(',', 2);
  var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};

  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === 'OK') {
      if (results[0]) {
        // tester to get address as popup
        window.alert(results[0].formatted_address)
        map.setZoom(11);
        var marker = new google.maps.Marker({
          position: latlng,
          map: map
        });
        infowindow.setContent(results[0].formatted_address);
        infowindow.open(map, marker);
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });
}
*/
