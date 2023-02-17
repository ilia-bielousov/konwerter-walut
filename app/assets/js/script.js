'use strict';

window.addEventListener('DOMContentLoaded', main);


function main() {
  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата 
  const today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let stringOfDate = '';

  if (month < 10) {
    month = `0${month}`
    stringOfDate = `${year}-${month}-${day}`;
  }

  if (day < 10) {
    day = `0${day}`
    stringOfDate = `${year}-${month}-${day}`;
  }

  currentDate.value = stringOfDate;

  request('C', '2022-10-22', '2022-12-12'); // вызываем 1 раз, чтобы не перегружать сервер;

  currentDate.addEventListener('input', function (e) {
    createRequest(e.target.value); // если изменили дату, делаем запрос на сервер
  });

  function createRequest(date) { // функция, которая создает запрос на сервер
    const baseTable = 'C';
    request(baseTable, '2022-10-22', '2022-12-12');
  }

  function request(current = 'C', startData = 'today', endDate = '') { // собственно сам запрос
    const baseUrl = 'http://api.nbp.pl/api/exchangerates/tables';

    getResource(`${baseUrl}/${current}/${startData}/${endDate}`)
      .then(data => data.json())
      .then(data => getValue(data))
      .catch(err => console.error(err));
  }

  function getValue(data) {
    let arrayOfValues = [];
    
    for (let i of data) {
      for (let current of i.rates) {
        if (current['code'] == 'USD') {
          arrayOfValues.push(current.bid);
        }
      }
    }

    console.log(arrayOfValues);
  }

  async function getResource(url) {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res;
  }

  const inputsValue = document.querySelectorAll('.konwerter__input-value');

  inputsValue.forEach((input, i) => {
    input.addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/\D/g, '');
      
    });
  });

}

