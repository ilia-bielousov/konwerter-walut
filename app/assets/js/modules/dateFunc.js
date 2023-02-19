const DateFunc = () => {
  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата 

  let stringOfDate = '';

  if (new Date().getMonth() < 9) {
    stringOfDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDay()}`;
  } else {
    stringOfDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`;
  }

  if ( new Date().getDay() < 10) {
    stringOfDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-0${new Date().getDay()}`;
  } else {
    stringOfDate = `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDay()}`;
  }

  currentDate.value = stringOfDate;
};

export default DateFunc;