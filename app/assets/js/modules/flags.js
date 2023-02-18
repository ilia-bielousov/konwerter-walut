const Flags = () => {
  const flagImage = document.querySelectorAll('.konwerter__flag i');
  const select = document.querySelectorAll('.konwerter__name-walute');
  const waluteName = document.querySelectorAll('.konwerter__walute span');
  const offenUsed = document.querySelectorAll('.konwerter__offen-used span');
  const selectOptions = document.querySelectorAll('.konwerter__name-walute');
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

  offenUsed.forEach((item, i) => {
    item.addEventListener('click', (event) => {
      const str = event.target.textContent.trim();
      
      const doIt = (num) => {
        waluteName[num].innerHTML = str;
        flagImage[num].classList.value = `flag-${flags[str]}`;
        selectOptions[num].childNodes.forEach(child => {
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

  select.forEach((item, i) => {
    item.addEventListener('change', (event) => {
      const str = event.target.value;

      waluteName[i].innerHTML = event.target.value;
      flagImage[i].classList.value = `flag-${flags[str]}`;
    });
  });
};

export default Flags;