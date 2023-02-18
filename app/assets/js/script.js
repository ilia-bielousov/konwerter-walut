import Request from './modules/request';
import Grafic from './modules/grafic';
import Flags from './modules/flags'

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Request();
  Grafic();
  Flags();
  // const inputsValue = document.querySelectorAll('.konwerter__input-value');

  // inputsValue.forEach((input, i) => {
  //   input.addEventListener('input', function (e) {
  //     e.target.value = e.target.value.replace(/\D/g, '');
      
  //   });
  // });
})