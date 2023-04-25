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
          temp.push(data[i].rates[firstWaluteNum].bid);
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
        this.ourData[i].push(data[i].rates[secondWaluteNum].bid);
      }
    }



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
    this.ourData = [];

    const index = this.findDate(data);
    this.ourData = this.fillData(data, index);
    
    this.ourData.unshift(['Data', 'kursFirstCurrency', 'kursSecondCurrency']);
    console.log(this.ourData);

    return this.ourData;
  }
}

export default DataBase;