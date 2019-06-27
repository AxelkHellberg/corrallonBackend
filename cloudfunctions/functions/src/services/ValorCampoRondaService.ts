import { GenericeService } from "./GenericService";
import { UnidadMedida } from "../entity/UnidadMedida";
import { UnidadMedidaRepository } from "../repository/UnidadMedidaRepository";
import { ValorCampoRonda } from "../entity/ValorCampoRonda";

/****************Configuration******************** */
const myRepository = ValorCampoRonda
/************************************* */
export class ValorCampoRondaService/**config */ extends GenericeService<ValorCampoRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}