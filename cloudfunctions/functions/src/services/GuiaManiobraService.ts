import { GenericeService } from "./GenericService";
import { GuiaManiobra } from "../entity/GuiaManiobra";
import { GuiaManiobraRepository } from "../repository/GuiasManiobraRepository";
/****************Configuration******************** */
const myRepository = GuiaManiobraRepository
/************************************* */
export class GuiaManiobraService/**config */ extends GenericeService<GuiaManiobra/**config */> {
    constructor() {
        super(new myRepository())
    }
}