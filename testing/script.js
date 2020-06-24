am4core.useTheme(am4themes_animated);
// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Set up data source
chart.dataSource.url = "https://raw.githubusercontent.com/elle-park/COVID19-Social-Mobility/master/data/longitudinal-state-2020-06-22.csv?token=AIXJGDD3MFWEKABOXVLXAVS67SXOO";
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

createSeries("AK", "Alaska", "circle", false);
createSeries("AL", "Alabama", "triangle", true);
createSeries("AR", "Arkansas", "rectangle", false);
createSeries("AZ", "Arizona", "rectangle", true);
createSeries("CA", "California", "rectangle", true);
createSeries("CO", "Colorado", "rectangle", true);
createSeries("CT", "Connecticut", "rectangle", true);
createSeries("DC", "Washington DC", "rectangle", true);
createSeries("DE", "Delaware", "rectangle", true);
createSeries("FL", "Florida", "rectangle", true);
createSeries("GA", "Georgia", "rectangle", true);
createSeries("HI", "Hawaii", "rectangle", true);
createSeries("IA", "Iowa", "rectangle", true);
createSeries("ID", "Idaho", "rectangle", true);
createSeries("IL", "Illinois", "rectangle", true);
createSeries("IN", "Indiana", "rectangle", true);


// Add legend
chart.legend = new am4charts.Legend();

// Add cursor
chart.cursor = new am4charts.XYCursor();
//chart.cursor.snapToSeries = alaska;
//chart.cursor.xAxis = categoryAxis;

// Add scroll bar - keep at bottom of graph
chart.scrollbarX = new am4core.Scrollbar();
chart.scrollbarX.parent = chart.bottomAxesContainer;
