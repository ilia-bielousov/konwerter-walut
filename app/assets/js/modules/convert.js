import Components from "./components";
import DataBase from "./database";
import Request from "./request";

class Convert extends Components {
  constructor() {
    super();
    this.information = new DataBase();
    this.walutaValue = undefined;
  }

  classLogic() {


    this.currentDate.addEventListener('change', () => {
      const time = this.giveDate();
      // const timeStr = `${time[0]}-${time[1]}`;
      const req = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${time[0]}-01/${time[0]}-${time[1]}`);

      req.getResource()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.checkContainDate(data);
        })
    });

    this.waluteInputs.forEach((input, i) => {
      input.addEventListener('input', (e) => {
        const time = this.giveDate();
        e.target.value = e.target.value.replace(/\D/g, '');
        const value = +e.target.value;
        const req = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${time[0]}-01/${time[0]}-${time[1]}`);

        req.getResource()
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (i == 0) {
              this.checkContainDate(data, value, 1, 0);
            } else {
              this.checkContainDate(data, value, 0, 1);
            }
          })
      });
    });
  }

  checkContainDate(data, value, index1, index2) {
    const outData = this.information.createData(data);
    let index = undefined;
    console.log(outData);

    for (let i = 0; i < outData.length; i++) {
      if (this.currentDate.value === outData[i][0]) {
        console.log(value);
        console.log(outData[i][1]);
        // console.log(this.waluteInputs[index2].value)
        this.waluteInputs[index1].value = (value * outData[i][1]).toFixed(2);
      }
    }
  }
};

export default Convert;