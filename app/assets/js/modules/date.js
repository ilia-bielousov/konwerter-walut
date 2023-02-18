const date = () => {
  const currentDate = document.querySelector('.konwerter__choose-day input'); // дата 
  const today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let stringOfDate = '';

  if (month < 10) {
    month = `0${month}`
    stringOfDate = `${year}-${month}-${day}`;
  }

  if (day < 10) {
    day = `0${day}`
    stringOfDate = `${year}-${month}-${day}`;
  }

  currentDate.value = stringOfDate;
  console.log('fdkslfsjkdl');
};

export default date();