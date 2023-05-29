import Components from "./components";
import DataBase from "./database";

class Convert extends Components {
  constructor() {
    super();
    this.data = new DataBase();
  }

  async changeDataBase(value = 0, i = 0) {
    this.setValue(await this.requestToAPI(), value, i);
  }

  startSite() {
    this.changeDataBase();

    this.waluteInputs.forEach(item => {
      item.value = 0;
    });
  }

  classLogic() { // переписать логику целого класса!!!
    this.startSite();

    this.currentDate.addEventListener('change', () => {
      this.changeDataBase(+this.waluteInputs[0].value);
    });

    this.select.forEach((item, i) => {
      item.addEventListener('change', () => {
        this.changeDataBase(+this.waluteInputs[0].value);
      });
    });

    this.offenUsed.forEach(item => {
      item.addEventListener('click', () => {
        this.changeDataBase(+this.waluteInputs[0].value);
      })
    });

    this.waluteInputs.forEach((input, i) => {
      input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/\D/g, '');
        const value = +e.target.value;

        this.changeDataBase(value, i);
      });
    });
  }

  setValue(data, value = 0, index = 0) {
    let temp = undefined;
    const dataInside = this.data.createData(data);

    for (let i = 0; i < dataInside.length; i++) {
      if (dataInside[i][0] == this.currentDate.value) {
        temp = i;
        break;
      } 
      
      if (temp == 0) { // немного доделать, берет значения в суботу за пятницу, в воскресенье за понедельник
        temp = 1;
        break;
      } else {
        temp = this.data.findDate(data);
      }
    }

    if (index == 0) {
      this.waluteInputs[1].value = (value * (dataInside[temp][1] / dataInside[temp][2])).toFixed(2);
    } else {
      this.waluteInputs[0].value = (value * (dataInside[temp][2] / dataInside[temp][1])).toFixed(2);
    }
  }
};

export default Convert;