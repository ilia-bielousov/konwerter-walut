const Flags = () => {
  const flagImage = document.querySelectorAll('.konwerter__flag i');
  const select = document.querySelectorAll('.konwerter__name-walute');
  const waluteName = document.querySelectorAll('.konwerter__walute span');

  const flags = {
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

  select.forEach((item, i) => {
    item.addEventListener('change', (event) => {
      const selectOptions = item.querySelectorAll('option[data-flag]');
      const str = event.target.value;

      waluteName[i].innerHTML = event.target.value;
      flagImage[i].classList.value = `flag-${flags[str]}`;
    });
  });
};

export default Flags;