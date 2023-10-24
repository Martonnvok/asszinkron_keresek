import DataService from "../model/DataService.js";
import DataView from "../view/Data/DataView.js";
import HibaView from "../view/Data/HibaView.js";
import Megjelenit from "../view/Megjelenit/Megjelenit.js";
import Model from "../model/Model.js";
import UrlapView from "../view/Megjelenit/MegjelenitSor.js";
import UrlapModel from "../model/UrlapModel.js";

class DataController {
    constructor() {
        this.dataService = new DataService();
        this.dataService.getData("../adat.json", this.megjelenit, this.hibaMegjelenit)
        this.model = new Model();
        this.uModel = new UrlapModel();
        new UrlapView(this.uModel.leiro, $(".urlap"));


    }

    megjelenit(lista) {
        console.log("controllerben", lista);
        new Megjelenit(lista, $(".lista"));
    }

    hibaMegjelenit(error) {
        console.log(error)
        new HibaView(error, $(".lista"));
    }
}
export default DataController;
