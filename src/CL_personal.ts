export default class personalCL{
    private _nombre: string = "";
    private _personal: number = 0;
    private _sueldo: number = 0;

    constructor(nombre: string, personal: number, sueldo: number){
        this._nombre = nombre;
        this._personal = personal;
        this._sueldo = sueldo;
    }

    set nombre(nombre: string){
        this._nombre = nombre;
    }
    get nombre(): string{
        return this._nombre;
    }

    set personal(personal: number){
        this._personal = personal;
    }
    get personal(): number{
        return this._personal;
    }

    set sueldo(sueldo: number){
        this._sueldo = sueldo;
    }
    get sueldo(): number{
        return this._sueldo;
    }

    aumento(): number{
        if(this._personal == 1){
            return this._sueldo * 0.2;
        } else if (this._personal == 2){
            return this._sueldo * 0.1;
        } else{
            return 0;
        }
            
}
}