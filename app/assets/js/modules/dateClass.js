import Components from "./components";

class DateClass extends Components {
  constructor() {
    super();
  }

  classLogic() {
    let stringOfDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`;

    if ((new Date().getMonth() + 1) < 10 || new Date().getDate() < 10) {
      stringOfDate.replace(/-/, '-0');
    }

    this.currentDate.value = stringOfDate;
  }
}

export default DateClass;