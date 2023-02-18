const Request = (current = 'C', baseUrl = 'http://api.nbp.pl/api/exchangerates/tables', date = '') => {

  const inputDate = document.querySelector('.konwerter__choose-day input');

  Date.prototype.daysInMonth = function () {
    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
  };

  let currentMouth = inputDate.value;
  let daysInMouth = new Date(`${inputDate.value}-12`).daysInMonth();

  // if (new Date().getDate() < daysInMouth) { // доделать условие
  //   daysInMouth = new Date().getDate() - 1;
  // }

  getResource(`${baseUrl}/${current}/${currentMouth}-01/${currentMouth}-${daysInMouth}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
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
    })
    .catch(err => console.error(err));

  async function getResource(url) {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res;
  };

}

export default Request;