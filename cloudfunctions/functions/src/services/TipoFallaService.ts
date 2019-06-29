import { GenericeService } from "./GenericService";
import { TipoFallaRepository } from "../repository/TipoFallaRepository";
import { TipoFalla } from "../entity/TipoFalla";
/****************Configuration******************** */
const myRepository = TipoFallaRepository
/************************************* */
export class TipoFallaService/**config */ extends GenericeService<TipoFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}