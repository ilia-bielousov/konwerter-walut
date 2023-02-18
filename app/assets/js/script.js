import Request from './modules/request';
import Grafic from './modules/grafic';
import Flags from './modules/flags';
import DateFunc from './modules/date';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Request();
  Grafic();
  Flags();
  DateFunc();

});