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
      const req = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${time[0]}-01/${time[0]}-${time[1]}`);

      req.getResource()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const outData = this.information.createData(data);
            this.setValue(outData, value, 1, this.information.findDate(data));
        });
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
            const outData = this.information.createData(data);

            if (i == 0) {
              this.setValue(outData, value, 1, this.information.findDate(data));
            } else {
              this.setValue(outData, value, 0, this.information.findDate(data));
            }
          });
      });
    });
  }

  setValue(data, value, curr, index) {
    if (curr == 1) {
      this.waluteInputs[curr].value = (value * data[index+1][1]).toFixed(2);
    } else {
      this.waluteInputs[0].value = (value * data[index+1][1]).toFixed(2);
    }
  }
};

export default Convert;