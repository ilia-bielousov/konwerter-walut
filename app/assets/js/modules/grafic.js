const Grafic = () => {
  google.charts.load('current', { 'packages': ['corechart'] });
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Data', 'Sales', 'Expenses'],
      ['2022-10-22', 1000, 400],
      ['2022-10-23', 1170, 460],
      ['2022-10-24', 660, 1120],
      ['2022-10-25', 1030, 5140],
      ['2022-10-25', 1030, 1540],
      ['2022-10-25', 1030, 240],
      ['2022-10-25', 1030, 540],
      ['2022-10-25', 1030, 540],
      ['2022-10-25', 1030, 340],
      ['2022-10-25', 1030, 540],
      ['2022-10-25', 1030, 140],
      ['2022-10-25', 1030, 3240],
      ['2022-10-25', 1030, 240],
      ['2022-10-25', 1030, 540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
      hAxis: {
        textPosition: 'none'
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('grafic'));

    chart.draw(data, options);
  }
};

export default Grafic;