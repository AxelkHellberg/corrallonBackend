import { GenericeService } from './GenericService'; 
import { TipoFallaRepository } from '../repository/TipoFallaRepository';
import { TipoFalla } from '../entity/TipoFalla';
let encriptutils = require('../components/encryputils')

/******************CONFIG CLASS************************** */
const myRepository = TipoFallaRepository
/******************************************************** */

export class TipoFallaService/**config */ extends GenericeService<TipoFalla/**config */> {
    constructor() {
        super(new myRepository())
    }
}