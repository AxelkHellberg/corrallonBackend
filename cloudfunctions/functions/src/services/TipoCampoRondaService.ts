import { GenericeService } from "./GenericService";
import { TipoCampoRondaRepository } from "../repository/TipoCampoRondaRepository";
import { TipoCampoRonda } from "../entity/TipoCampoRonda";

/****************Configuration******************** */
const myRepository = TipoCampoRondaRepository
/************************************* */
export class TipoCampoRondaService/**config */ extends GenericeService<TipoCampoRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}