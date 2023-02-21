import Components from './components';
import Request from './request';

class Grafic extends Components {
  constructor() {
    super();
  }

  classLogic() {

    this.currentDate.addEventListener('change', () => {
      this.giveDate();
      this.reqForGrafic();
    });
  }

  createData(data) {
    let outData = [];
    let waluteValueIndex = undefined;

    for (let i = 0; i < data[0].rates.length; i++) {
      if (this.waluteName[0].textContent == data[i].rates[i]['code']) {
        waluteValueIndex = i;
        break;
      }
    }

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < 2;) {
        let temp = [];
        temp.push(data[i].effectiveDate)
        j += 1;
        temp.push(data[i].rates[waluteValueIndex].bid);
        outData.push(temp);
        j += 1;
      }
    }

    outData.unshift(['Data', 'kurs']);

    return outData;
  }

  createGrafic(data) {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(drawChart);

    const outData = this.createData(data);

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
    const grafic = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${this.currentMouth}-01/${this.currentMouth}-${this.daysInMouth}`);

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