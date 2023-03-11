import Components from './components';
import Request from './request';
import DataBase from './database';

class Grafic extends Components {
  constructor() {
    super();
    this.information = new DataBase();
  }

  classLogic() {
    this.currentDate.addEventListener('change', () => {
      this.reqForGrafic();
    });
  }

  createGrafic(data) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    // data = data.pop();

    const outData = this.information.createData(data);

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

  reqForGrafic() {
    const time = this.giveDate();
    const grafic = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${time[0]}-01/${time[0]}-${time[1]}`);

    grafic.getResource()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.createGrafic(data);
      })
  }

  firstBuild() {
    this.giveDate();
    this.reqForGrafic();
  }
}

export default Grafic;