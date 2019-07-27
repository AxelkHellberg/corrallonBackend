import { GenericeService } from './GenericService'; 
import { HistorialEstadoFallaRepository } from '../repository/HistorialEstadoFallaRepository';
import { HistorialEstadoFalla } from '../entity/HistorialEstadoFalla';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = HistorialEstadoFallaRepository
/******************************************************** */

export class HistorialEstadoFallaService/**config */ extends GenericeService<HistorialEstadoFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}