import { GenericeService } from './GenericService'; 
import { EstadoFallaRepository } from '../repository/EstadoFallaRepository';
import { EstadoFalla } from '../entity/EstadoFalla';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = EstadoFallaRepository
/******************************************************** */

export class EstadoFallaService/**config */ extends GenericeService<EstadoFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}