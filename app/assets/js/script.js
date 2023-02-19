import Flags from './modules/flags';
import DateClass from './modules/dateClass';
import Grafic from './modules/grafic';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  new Flags().classLogic();
  new DateClass().classLogic();
  new Grafic().classLogic();
});