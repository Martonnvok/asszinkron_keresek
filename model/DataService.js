export default class DataService {
    getData(vegpont, callback, hibacallback,leiro) {
      axios
        .get(vegpont)
        .then(function (response) {
          callback(response.data.nevek,leiro)
          
        })
        .catch(function (error) {
          // handle error
          hibacallback(error)
        })
        .finally(function () {
          // always executed
        });
    }
  }
  