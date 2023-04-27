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
    let outDataTransform = [];

    for (let i = 0; i < outData.length; i++) {
      const t = +(outData[i][1] / outData[i][2]).toFixed(3);
      outDataTransform[i] = [outData[i][0], t];
    }

    outDataTransform[0] = ['data', 'value'];

    function drawChart() {
      var data = google.visualization.arrayToDataTable(outDataTransform);

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