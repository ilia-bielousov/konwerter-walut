import Request from "./request";

class Components extends Request {
  constructor() {
    super();

    this.request = null;

    this.waluteInputs = document.querySelectorAll('.konwerter__input-value');
    this.currentDate = document.querySelector('.konwerter__choose-day input');
    this.flagImages = document.querySelectorAll('.konwerter__flag i');
    this.waluteName = document.querySelectorAll('.konwerter__walute span');
    this.offenUsed = document.querySelectorAll('.konwerter__offen-used span');
    this.select = document.querySelectorAll('.konwerter__name-walute');
    this.flags = {
      "USD": "US",
      "AUD": "AU",
      "CAD": "CA",
      "EUR": "EU",
      "HUF": "HU",
      "CHF": "CH",
      "GBP": "GB",
      "JPY": "JP",
      "CZK": "CZ",
      "DKK": "DK",
      "NOK": "NO",
      "SEK": "SE",
      "PLN": "PL"
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
    const year = new Date().getFullYear();
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