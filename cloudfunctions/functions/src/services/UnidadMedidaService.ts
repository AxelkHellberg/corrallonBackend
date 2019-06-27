import { GenericeService } from "./GenericService";
import { UnidadMedida } from "../entity/UnidadMedida";
import { UnidadMedidaRepository } from "../repository/UnidadMedidaRepository";

/****************Configuration******************** */
const myRepository = UnidadMedidaRepository
/************************************* */
export class UnidadMedidaService/**config */ extends GenericeService<UnidadMedida/**config */> {
    constructor() {
        super(new myRepository())
    }
}