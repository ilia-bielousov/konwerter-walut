import Components from "./components";

class DataBase extends Components {
  constructor() {
    super();
  }

  createData(data) {
    let outData = [];
    let waluteValueIndex = undefined;

    for (let i = 0; i < data[0].rates.length; i++) {
      if (this.waluteName[0].textContent == data[i].rates[i]['code']) {
        waluteValueIndex = i;
        break;
      } // если выбирать злотый, а от злотого пляшем будет ошибка, пофиксю, когда
      // функционал будет допилен.
    }

    for (let i = 0; i < data.length; i++) {
      for (let j = 0; j < 2;) {
        let temp = [];
        temp.push(data[i].effectiveDate)
        j += 1;
        temp.push(data[i].rates[waluteValueIndex].bid);
        outData.push(temp);
        j += 1;
      }
    }

    outData.unshift(['Data', 'kurs']);

    return outData;
  }
}

export default DataBase;