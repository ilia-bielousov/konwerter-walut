import Components from './components';
import Request from './request';

class Grafic extends Components {
  constructor() {
    super();
  }

  classLogic() {
    Date.prototype.daysInMonth = function () {
      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };
    let currentMouth = this.currentDate.value;
    currentMouth = currentMouth.slice(0, 7);
    let daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();

    this.currentDate.addEventListener('change', () => {
      currentMouth = this.currentDate.value;
      currentMouth = currentMouth.slice(0, 7);
      daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();

      if (new Date().getMonth() == new Date(currentMouth).getMonth()) {
        daysInMouth = new Date().getDate();
      }

      const grafic = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${currentMouth}-01/${currentMouth}-${daysInMouth}`);

      grafic.getResource()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          createGrafic(data);
        })
    });

    function createGrafic(data) {
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);

      let outData = [];

      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2;) {
          let temp = [];
          temp.push(data[i].effectiveDate)
          j += 1;
          temp.push(data[i].rates[0].bid);
          outData.push(temp);
          j += 1;
        }
      }

      outData.unshift(['Data', 'kurs']);

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
  }
}

export default Grafic;