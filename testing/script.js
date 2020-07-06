am4core.useTheme(am4themes_animated);
// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Set up data source
//chart.dataSource.url = "https://raw.githubusercontent.com/elle-park/COVID19-Social-Mobility/master/data/index-total.csv?token=AIXJGDHWSVBGKN2S7NCX56K7A6YJQ";
//chart.dataSource.parser = new am4core.CSVParser();
//chart.dataSource.parser.options.useColumnNames = true;


var data = [
  {
    "location": "United States",
    "mobility_before_distancing": 29.531047545190876,
    "mobility_after_distancing": 65.58009974912021
  }
];

chart.data=data;
// Create axes
var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "location";
categoryAxis.numberFormatter.numberFormat = "#";
categoryAxis.renderer.inversed = true;
categoryAxis.renderer.grid.template.location = 0;
categoryAxis.renderer.cellStartLocation = 0.1;
categoryAxis.renderer.cellEndLocation = 0.9;

var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.opposite = true;

// Create series
function createSeries(field, name) {
  var series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueX = field;
  series.dataFields.categoryY = "location";
  series.name = name;
  series.columns.template.tooltipText = "{name}: [bold]{valueX}[/]";
  series.columns.template.height = am4core.percent(100);
  series.sequencedInterpolation = true;

  var valueLabel = series.bullets.push(new am4charts.LabelBullet());
  valueLabel.label.text = "{valueX}";
  valueLabel.label.horizontalCenter = "left";
  valueLabel.label.dx = 10;
  valueLabel.label.hideOversized = false;
  valueLabel.label.truncate = false;

  var categoryLabel = series.bullets.push(new am4charts.LabelBullet());
  categoryLabel.label.text = "{name}";
  categoryLabel.label.horizontalCenter = "right";
  categoryLabel.label.dx = -10;
  categoryLabel.label.fill = am4core.color("#fff");
  categoryLabel.label.hideOversized = false;
  categoryLabel.label.truncate = false;
}

/*
  Plot by clicking on table
*/
var table = document.getElementById("myTable");
if (table != null) {
    for (var i = 1; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function () {
          data.push({
            "location": this.innerHTML,
            "mobility_before_distancing": 50,
            "mobility_after_distancing": 50
          });
          chart.data = reloadData();
        };
    }
}

function reloadData() {
  return data;
}

createSeries("mobility_before_distancing", "Pre-Mobility");
createSeries("mobility_after_distancing", "Post-Mobility");
