import Components from "./components";

class DateClass extends Components {
  constructor() {
    super();
  }

  classLogic() {
    const year = new Date().getFullYear();
    let month = new Date().getMonth() + 1;
    let day = new Date().getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    this.currentDate.value = `${year}-${month}-${day}`;
  }
}

export default DateClass;