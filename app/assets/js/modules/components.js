import Request from "./request";

class Components extends Request {
  constructor() {
    super();

    this.request = null;

    this.waluteInputs = document.querySelectorAll('.konwerter__input-value');
<<<<<<< HEAD
    this.currentDate = document.querySelector('#date');
    this.flagImages = document.querySelectorAll('.konwerter__flag span');
=======
    this.currentDate = document.querySelector('.konwerter__calendar input');
    this.flagImages = document.querySelectorAll('.konwerter__flag-item');
>>>>>>> 334da0ba36f80b09388fd39657676083e9bdae4d
    this.waluteName = document.querySelectorAll('.konwerter__walute span');
    this.offenUsed = document.querySelectorAll('.konwerter__offen-used span');
    this.select = document.querySelectorAll('.konwerter__name-walute');
    this.flags = {
      "USD": "us",
      "AUD": "au",
      "CAD": "ca",
      "EUR": "eu",
      "HUF": "hu",
<<<<<<< HEAD
      "CHF": "ch",
=======
      "CHF": "cg",
>>>>>>> 334da0ba36f80b09388fd39657676083e9bdae4d
      "GBP": "gb",
      "JPY": "jp",
      "CZK": "cz",
      "DKK": "dk",
      "NOK": "no",
      "SEK": "se",
      "PLN": "pl"
    };
  }

  async requestToAPI() {
    const time = this.giveCurrentDate();
    this.request = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${time[0]}-01/${time[0]}-${time[1]}`);

    let dataBase = this.request.getResource()
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });

    const data_1 = await dataBase;

    return data_1;
  }

  giveCurrentDate() {
    Date.prototype.daysInMonth = function () {
      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    this.currentMouth = this.currentDate.value;
    this.currentMouth = this.currentMouth.slice(0, 7);
    this.daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();

    if (new Date().getMonth() == new Date(this.currentMouth).getMonth()) {
      this.daysInMouth = new Date().getDate();
    }

    return [this.currentMouth, this.daysInMouth];
  }

  Date() {
    let year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    this.currentDate.value = `${year}-${month}-${day}`;
    this.currentDate.max = `${year}-${month}-${day}`;
  }

}

export default Components;