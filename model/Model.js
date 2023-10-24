import { adatLeiras } from "./adat.js";

class Model {
    #objektum = {};
    constructor() {
        this.#objektum = adatLeiras;
    }

    getList() {
        return this.#objektum;
    }

    torol(index) {
        this.#objektum.splice(index, 1);
    }

    boolean(index) {
        if (this.#objektum[index].kesz == false) {
            this.#objektum[index].kesz = true;
        }
        else {
            this.#objektum[index].kesz = false
        }
        console.log(this.#objektum[index].kesz)
    }
    ujAdat(obj) {
        this.#objektum.push(obj);
    }
}
export default Model;