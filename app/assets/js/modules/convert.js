const convert = () => {
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
};

export default convert();