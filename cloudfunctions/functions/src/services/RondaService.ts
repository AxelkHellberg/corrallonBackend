import { Sistema } from "../entity/Sistema";
import { GenericeService } from "./GenericService";
import { SistemaRepository } from "../repository/SistemaRepository";
import { Ronda } from "../entity/Ronda";
import { RondaRepository } from "../repository/RondaRepository";

/****************Configuration******************** */
const myRepository = RondaRepository
/************************************* */
export class RondaService/**config */ extends GenericeService<Ronda/**config */> {
    constructor() {
        super(new myRepository())
    }
}