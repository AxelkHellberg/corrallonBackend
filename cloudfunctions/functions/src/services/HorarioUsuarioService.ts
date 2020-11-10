import { GenericeService } from './GenericService'; 
import { EstadoFallaRepository } from '../repository/EstadoFallaRepository';
import { CampoRondaPlantillaRonda } from '../entity/CampoRondaPlantillaRonda';
import { HorarioUsuarioRepository } from '../repository/HorarioUsuarioRepository';
import { HorarioPersona } from '../entity/HorarioPersona';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = HorarioUsuarioRepository
/******************************************************** */

export class HorarioUsuarioService /**config */ extends GenericeService<HorarioPersona/**config */> {
    constructor() {
        super(new myRepository())
    }
}