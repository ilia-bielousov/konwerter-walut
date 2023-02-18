const Convert = () => {
  function getValue(data) {
    let arrayOfValues = [];

    for (let i of data) {
      for (let current of i.rates) {
        if (current['code'] == 'USD') {
          arrayOfValues.push(current.bid);
        }
      }
    }
  }

  inputsValue.forEach((input, i) => {
    input.addEventListener('input', function (e) {
      e.target.value = e.target.value.replace(/\D/g, '');
      
    });
  });
};

export default Convert;