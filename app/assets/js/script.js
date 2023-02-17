'use strict';

window.addEventListener('DOMContentLoaded', main);


function main() {
  const inputsValue = document.querySelectorAll('.konwerter__input-value');

  inputsValue.forEach(input => {
    input.addEventListener('input', function(e) {
      e.target.value = e.target.value.replace(/\D/g, '');

      createRequest();
    });
  });
}

function createRequest() {
  const currentDate = document.querySelector('.konwerter__choose-day input').value;
  const baseTable = 'C';

  req(baseTable, currentDate);
}

function req(current, data = '') {
  const baseUrl = 'http://api.nbp.pl/api/exchangerates/tables';

  getResource(`${baseUrl}/${current}/${data}/`)
  .then(data => data.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
}

async function getResource(url) {
  const res = await fetch(`${url}`);

  if (!res.ok) {
    throw new Error (`Could not fetch ${url}, status: ${res.status}`);
  }

  return res;
}