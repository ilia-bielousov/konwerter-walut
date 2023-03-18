import Components from "./components";

class DataBase extends Components {
  constructor() {
    super();
  }

  currentValueWalute(data, index) {
    const walute = this.waluteName[0].textContent;
    let temp = undefined;

    for (let i = 0; i < data[index].rates.length; i++) {
      if (walute === data[index].rates[i].code) {
        temp = i;
        break;
      } else {
        temp = -1;
      }
    }

    return temp;
  }

  fillData(data, index) {
    let ourData = [];
    const t = this.currentValueWalute(data, index);

    if (t == -1) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2;) {
          let temp = [];
          temp.push(data[i].effectiveDate)
          j += 1;
          temp.push(1);
          j += 1;
          ourData.push(temp);
        }
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2;) {
          let temp = [];
          temp.push(data[i].effectiveDate)
          j += 1;
          temp.push(data[i].rates[t].bid);
          j += 1;
          ourData.push(temp);
        }
      }
    }

    ourData.unshift(['Data', 'kurs']);

    return ourData;
  }

  findIndex(data, date) {
    let index = undefined;
    for (let i = 0; i < data.length; i++) {
      if (data[i].effectiveDate == date) {
        index = i;
        break;
      } else {
        index = undefined;
      }
    }

    return index;
  }

  findDate(data) {
    let outDate = this.currentDate.value;
    let index = undefined;

    while (true) {
      let trepl = outDate.slice(-2);
      let t = +outDate.slice(-2) - 1;

      if (t < 10) {
        outDate = outDate.replace(trepl, `0${t}`);
      } else {
        outDate = outDate.replace(trepl, t);
      }

      if (t < 0) {
        index = 0;
        break;
      }

      index = this.findIndex(data, outDate);

      if (index) {
        break;
      }
    }

    return index;
  }

  createData(data) {
    const index = this.findDate(data);
    const ourData = this.fillData(data, index);

    return ourData;
  }
}

export default DataBase;