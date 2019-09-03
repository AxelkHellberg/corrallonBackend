import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { Planta } from "../entity/Planta";
import { LecturaTagRepository } from "../repository/LecturaTagRepository";
import { LecturaTag } from "../entity/LecturaTag";
import { ListaRonda } from "../entity/ListaRonda";
import { ListaRondaRepository } from "../repository/ListaRondaRepository";
/****************Configuration******************** */
const myRepository = ListaRondaRepository
/************************************* */
export class ListaRondaService/**config */ extends GenericeService<ListaRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}