import Components from "./components";

class DataBase extends Components {
  constructor() {
    super();
    
    this.ourData = undefined;
  }

  currentValueWalute(data, index, numOfWalute = 0) {
    const walute = this.waluteName[numOfWalute].textContent;
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
    const firstWaluteNum = this.currentValueWalute(data, index);
    const secondWaluteNum = this.currentValueWalute(data, index, 1);

    if (firstWaluteNum == -1) {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2;) {
          let temp = [];
          temp.push(data[i].effectiveDate)
          j += 1;
          temp.push(1);
          j += 1;
          this.ourData.push(temp);
        }
      }
    } else {
      for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < 2;) {
          let temp = [];
          temp.push(data[i].effectiveDate)
          j += 1;
          temp.push(((data[i].rates[firstWaluteNum].bid + data[i].rates[firstWaluteNum].ask) / 2));
          j += 1;
          this.ourData.push(temp);
        }
      }
    }

    if (secondWaluteNum == -1) {
      for (let i = 0; i < this.ourData.length; i++) {
        this.ourData[i].push(1);
      }
    } else {
      for (let i = 0; i < this.ourData.length; i++) {
        this.ourData[i].push(((data[i].rates[secondWaluteNum].bid + data[i].rates[secondWaluteNum].ask) / 2));
      }
    }

    let t = this.findDate(data);

    document.querySelector('[data-bidFirstWalute]').textContent = !(firstWaluteNum == -1) ? data[t].rates[firstWaluteNum].bid : 1;
    document.querySelector('[data-askFirstWalute]').textContent = !(firstWaluteNum == -1)  ? data[t].rates[firstWaluteNum].ask : 1;
    document.querySelector('[data-bidSecondWalute]').textContent = !(secondWaluteNum == -1)  ? data[t].rates[secondWaluteNum].bid : 1;
    document.querySelector('[data-askSecondWalute]').textContent = !(secondWaluteNum == -1)  ? data[t].rates[secondWaluteNum].ask : 1;
    document.querySelector('[data-nameFirstWalute]').textContent = !(firstWaluteNum == -1)  ? data[t].rates[firstWaluteNum].code : 'PLN';
    document.querySelector('[data-nameSecondWalute]').textContent = !(secondWaluteNum == -1)  ? data[t].rates[secondWaluteNum].code : 'PLN';

    return this.ourData;
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
    let trepl = outDate.slice(-2);
    let t = +outDate.slice(-2);

    while (true) {
      index = this.findIndex(data, outDate);

      if (t < 10) {
        outDate = outDate.replace(trepl, `0${t}`);
      } else {
        outDate = outDate.replace(trepl, `${t}`);
      }

      t = t - 1;

      if (t < 0) {
        index = 0;
        break;
      }

      if (index) {
        break;
      }
    }

    return index;
  }

  transformData(data, input = 0) {
    let t = [];

    for (let i = 0; i < data.length; i++) {
      if (input == 0) {
        t.push([data[i][0], +(data[i][1] / data[i][2]).toFixed(3)]);
      } else {
        t.push([data[i][0], +(data[i][2] / data[i][1]).toFixed(3)]);
      }
    }

    return t;
  }

  createData(data) {
    this.ourData = [];

    const index = this.findDate(data);
    this.ourData = this.fillData(data, index);

    return this.ourData;
  }
}

export default DataBase;