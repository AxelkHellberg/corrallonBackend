import { GenericeService } from './GenericService'; 
import { FallaEquipamientoRepository } from '../repository/FallaEquipamientoRepository';
import { FallaEquipamiento } from '../entity/FallaEquipamiento';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = FallaEquipamientoRepository
/******************************************************** */

export class FallaEquipamientoService/**config */ extends GenericeService<FallaEquipamiento/**config */> {
    constructor() {
        super(new myRepository())
    }
}