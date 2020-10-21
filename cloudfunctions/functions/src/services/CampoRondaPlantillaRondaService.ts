import { GenericeService } from './GenericService'; 
import { EstadoFallaRepository } from '../repository/EstadoFallaRepository';
import { CampoRondaPlantillaRonda } from '../entity/CampoRondaPlantillaRonda';
import { CampoRondaPlantillaRondaRepository } from '../repository/CampoRondaPlantillaRondaRepository';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = CampoRondaPlantillaRondaRepository
/******************************************************** */

export class CampoRondaPlantillaRondaService /**config */ extends GenericeService<CampoRondaPlantillaRonda/**config */> {
    constructor() {
        super(new myRepository())
    }
}