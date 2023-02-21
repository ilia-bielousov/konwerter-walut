import Flags from './modules/flags';
import DateClass from './modules/dateClass';
import Grafic from './modules/grafic';
import Convert from './modules/convert';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const flags = new Flags();
  const dateClass = new DateClass();
  const grafic = new Grafic();
  const convert = new Convert();

  flags.classLogic();
  dateClass.classLogic();
  grafic.firstBuild();
  grafic.classLogic();
  convert.classLogic();
});