const DateFunc = () => {
  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата 
  const today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;

  let stringOfDate = '';

  if (month < 10) {
    month = `0${month}`
    stringOfDate = `${year}-${month}`;
  }

  currentDate.value = stringOfDate;
  currentDate.max = stringOfDate;
};

export default DateFunc;