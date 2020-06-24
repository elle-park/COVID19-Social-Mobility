// Create chart instance
var chart = am4core.create("chartdiv", am4charts.XYChart);

// Set up data source
chart.dataSource.url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/t-160/sample_data_serial.csv";
chart.dataSource.parser = new am4core.CSVParser();
chart.dataSource.parser.options.useColumnNames = true;

// Create axes
var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "year";

// Create value axis
var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

// Create series
var series1 = chart.series.push(new am4charts.LineSeries());
series1.dataFields.valueY = "cars";
series1.dataFields.categoryX = "year";
series1.name = "Cars";
series1.strokeWidth = 3;
series1.tensionX = 0.7;
series1.bullets.push(new am4charts.CircleBullet());
series1.hidden = false;

var series2 = chart.series.push(new am4charts.LineSeries());
series2.dataFields.valueY = "motorcycles";
series2.dataFields.categoryX = "year";
series2.name = "Motorcycles";
series2.strokeWidth = 3;
series2.tensionX = 0.7;
series2.bullets.push(new am4charts.CircleBullet());
series2.hidden = true;

var series3 = chart.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "bicycles";
series3.dataFields.categoryX = "year";
series3.name = "Bicycles";
series3.strokeWidth = 3;
series3.tensionX = 0.7;
series3.bullets.push(new am4charts.CircleBullet());
series3.hidden = true;

// Add legend
chart.legend = new am4charts.Legend();
