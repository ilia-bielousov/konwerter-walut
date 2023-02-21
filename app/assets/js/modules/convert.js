import Components from "./components";
import Request from "./request";

class Convert extends Components {
  constructor() {
    super();
  }

  classLogic() {

    this.currentDate.addEventListener('change', () => {
      this.giveDate();

      const data = new Request(`http://api.nbp.pl/api/exchangerates/tables/C/${this.currentMouth}-01/${this.currentMouth}-${this.daysInMouth}`);

      data.getResource()
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          let t = this.currentDate.value;
          data.forEach((item, i) => {
          });
        });
    });

    // let arrayOfValues = [];

    // for (let i of data) {
    //   for (let current of i.rates) {
    //     if (current['code'] == 'USD') {
    //       arrayOfValues.push(current.bid);
    //     }
    //   }
    // }

    // inputsValue.forEach((input, i) => {
    //   input.addEventListener('input', function (e) {
    //     e.target.value = e.target.value.replace(/\D/g, '');

    //   });
    // });

    // console.log(this.data);
  }
};

export default Convert;