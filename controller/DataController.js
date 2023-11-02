import DataService from "../model/DataService.js";
import DataView from "../view/Data/DataView.js";
import HibaView from "../view/Data/HibaView.js";
import Megjelenit from "../view/Megjelenit/Megjelenit.js";
import UrlapView from "../view/Urlapok/UrlapView.js";
import UrlapModel from "../model/UrlapModel.js";

class DataController {
  constructor() {
    this.dataService = new DataService();
    this.urlapModel = new UrlapModel();
    console.log(this.urlapModel.getLeiro())
    this.dataService.getData("../adat.json", this.megjelenit, this.hibamegjelenit,this.urlapModel.getLeiro());
   
  }

  megjelenit(lista,leiro) {
    console.log("controllerben", lista);
    new DataView(lista, $(".lista"));
    new UrlapView($(".ujadat"), leiro);
    new Megjelenit(lista, $(".lista"),leiro);
  }

  hibamegjelenit(error){
    console.log(error)
    new HibaView(error, $(".lista"))

  }
}
export default DataController;
