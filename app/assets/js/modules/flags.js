import Components from "./components";
import Grafic from './grafic';

class Flags extends Components {
  constructor() {
    super();
    this.grafic = new Grafic();
  }

  classLogic() {
    this.offenUsed.forEach((item, i) => {
      item.addEventListener('click', (event) => {
        const str = event.target.textContent.trim();

        const doIt = (num) => {
          this.waluteName[num].innerHTML = str;
          console.log(this.select[num]);
          this.flagImages[num].classList.value = `konwerter__flag-item fi fi-${this.flags[str]}`;
          this.select[num].childNodes.forEach(child => { // пока пускай так будет
            if (child.value == str) {
              child.selected = true;
            }
          })
        };
  
        if (i < 4) {
          doIt(0);
        } else {
          doIt(1);
        }

        this.grafic.showGrafic();
      });
    });
  
    this.select.forEach((item, i) => {
      item.addEventListener('change', (event) => {
        const str = event.target.value;
        
        this.waluteName[i].textContent = event.target.value;
        this.flagImages[i].classList.value = `konwerter__flag-item fi fi-${this.flags[str]}`;
        this.grafic.showGrafic();
      });
    });
  }
}

export default Flags;