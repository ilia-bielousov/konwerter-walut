class Components {
  constructor() {
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
  
  giveDate() {
    Date.prototype.daysInMonth = function () {
      return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
    };

    this.currentMouth = this.currentDate.value;
    this.currentMouth = this.currentMouth.slice(0, 7);
    this.daysInMouth = new Date(`${this.currentDate.value}`).daysInMonth();

    if (new Date().getMonth() == new Date(this.currentMouth).getMonth()) {
      this.daysInMouth = new Date().getDate();
    }
  }
}

export default Components;