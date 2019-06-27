import { Sistema } from "../entity/Sistema";
import { GenericeService } from "./GenericService";
import { SistemaRepository } from "../repository/SistemaRepository";

/****************Configuration******************** */
const myRepository = SistemaRepository
/************************************* */
export class SistemaService/**config */ extends GenericeService<Sistema/**config */> {
    constructor() {
        super(new myRepository())
    }
}