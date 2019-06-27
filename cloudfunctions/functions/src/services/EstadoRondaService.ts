import { PlantaRepository } from "../repository/PlantaRepository";
import { GenericeService } from "./GenericService";
import { EquipamientoRepository } from "../repository/EquipamientoRepository";
import { Equipamiento } from "../entity/Equipamiento";
import { EstadoRondaRepository } from "../repository/EstadoRondaRepository";
import { EstadoRonda } from "../entity/EstadoRonda";
/****************Configuration******************** */
const myRepository = EstadoRondaRepository
/************************************* */
export class EstadoRondaService/**config */ extends GenericeService<EstadoRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}