import Components from "./components";
import Request from "./request";

class Flags extends Components {
  constructor() {
    super();
  }

  classLogic() {
    this.offenUsed.forEach((item, i) => {
      item.addEventListener('click', (event) => {
        const str = event.target.textContent.trim();
        
        const doIt = (num) => {
          this.waluteName[num].innerHTML = str;
          this.flagImages[num].classList.value = `flag-${flags[str]}`;
          this.select[num].childNodes.forEach(child => {
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
      });
    });
  
    this.select.forEach((item, i) => {
      item.addEventListener('change', (event) => {
        const str = event.target.value;
        const value = new Request(`http://api.nbp.pl/api/exchangerates/rates/C/${event.target.value}/`);
  
        this.waluteName[i].textContent = event.target.value;
        this.flagImages[i].classList.value = `flag-${this.flags[str]}`;
  
        value.getResource()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
        })
      });
    });
  }
}

export default Flags;