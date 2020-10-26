import { GenericeService } from './GenericService'; 
import { EstadoFallaRepository } from '../repository/EstadoFallaRepository';
import { CampoRondaPlantillaRonda } from '../entity/CampoRondaPlantillaRonda';
import { CampoRondaPlantillaRondaRepository } from '../repository/CampoRondaPlantillaRondaRepository';
import { HorarioRepository } from '../repository/HorarioRepository';
import { Horario } from '../entity/Horario';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = HorarioRepository
/******************************************************** */

export class HorarioService /**config */ extends GenericeService<Horario/**config */> {
    constructor() {
        super(new myRepository())
    }
}