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
}

export default Components;