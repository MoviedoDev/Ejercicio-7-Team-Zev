import personalCL from "./CL_personal";

export default class empresaCL{
    private _acMontoAdicional: number = 0;

    constructor(){
        this._acMontoAdicional = 0;
    }

    procesarPersonal(p: personalCL): void{
        this._acMontoAdicional += p.aumento();
    }

    totalAdicional(): number{
        return this._acMontoAdicional;
    }
}