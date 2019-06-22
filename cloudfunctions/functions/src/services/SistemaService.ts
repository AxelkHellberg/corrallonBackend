import { Sistema } from "../entity/Sistema";
import { GenericeService } from "./GenericService";
import { SistemaRepository } from "../repository/SistemaRepository";

/****************Configuration******************** */
const myRepository = SistemaRepository
/************************************* */
export class SistemaService extends GenericeService<Sistema> {
    constructor() {
        super(new myRepository())
    }
}