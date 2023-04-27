import Components from './components';
import DataBase from './database';

class Grafic extends Components {
  constructor() {
    super();
    this.data = new DataBase();
  }

  classLogic() {
    this.currentDate.addEventListener('change', () => {
      this.showGrafic();
    });
  }

  createGrafic(data) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    const outData = this.data.createData(data);

    function drawChart() {
      var data = google.visualization.arrayToDataTable(outData);

      var options = {
        title: '',
        curveType: 'function',
        legend: { position: 'bottom' },
        hAxis: {
          textPosition: 'none'
        }
      };

      var chart = new google.visualization.LineChart(document.getElementById('grafic'));

      chart.draw(data, options);
    }
  }

  async showGrafic() {
    this.createGrafic(await this.requestToAPI());
  }
}

export default Grafic;