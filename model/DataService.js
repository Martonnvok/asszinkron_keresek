class DataService {

    getData(vegpont, callback, hibaCallBack) {
        axios.get(vegpont)
            .then(function (response) {
                // handle success
                console.log(response);
                console.log("data",response.data);
                console.log("státusz",response.request.status);
                console.log("text",response.statusText);
                callback(response.data.nevek);
            })
            .catch(function (error) {
                // handle error
                hibaCallBack(error);
               
            })
            .finally(function () {
                // always executed
            });
    }
}
export default DataService;