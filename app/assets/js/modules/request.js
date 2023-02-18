const Request = (current = 'C', baseUrl = 'http://api.nbp.pl/api/exchangerates/tables', startData = '', endDate = '') => {

  getResource(`${baseUrl}/${current}/${startData}/${endDate}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch(err => console.error(err));

  async function getResource(url) {
    const res = await fetch(`${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    }

    return res;
  };

}

export default Request;