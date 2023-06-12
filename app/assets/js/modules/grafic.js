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
    google.charts.load('current', { 'packages': ['corechart', 'line'] });
    google.charts.setOnLoadCallback(drawChart);

    const outData = this.data.createData(data);

    function drawChart() {
      console.log(outData);
      var data = new google.visualization.DataTable();
      data.addColumn('date', 'Date');
      data.addColumn('number', 'Current');
      
      let t = [];
      
      for (let i = 0; i < outData.length; i++) {
        t.push([new Date(outData[i][0]), outData[i][1]]);
      }
      
      data.addRows(t);

      var options = {
        curveType: 'function',
        legend: { position: 'none' },
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