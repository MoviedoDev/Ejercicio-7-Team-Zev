export default class personalCL {
    constructor(nombre, personal, sueldo) {
        this._nombre = "";
        this._personal = 0;
        this._sueldo = 0;
        this._nombre = nombre;
        this._personal = personal;
        this._sueldo = sueldo;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }
    set personal(personal) {
        this._personal = personal;
    }
    get personal() {
        return this._personal;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    get sueldo() {
        return this._sueldo;
    }
    aumento() {
        if (this._personal == 1) {
            return this._sueldo * 0.2;
        }
        else if (this._personal == 2) {
            return this._sueldo * 0.1;
        }
        else {
            return 0;
        }
    }
}
//# sourceMappingURL=CL_personal.js.map