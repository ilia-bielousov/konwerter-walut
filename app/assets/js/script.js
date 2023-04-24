import Flags from './modules/flags';
import Grafic from './modules/grafic';
import Convert from './modules/convert';
import Components from './modules/components';

window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  
  const components = new Components();
  const flags = new Flags();
  const grafic = new Grafic();
  const convert = new Convert();
  
  components.Date();
  components.requestToAPI();
  grafic.showGrafic();

  flags.classLogic();
  
  grafic.classLogic();
  convert.classLogic();
  
});